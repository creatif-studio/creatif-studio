import * as express from "express";

// types
import { Request, AppData, Controller } from "../types";
import { Response } from "express";

// services
import { BackendService, AppService, SystemUserService } from "../services";

// config
import { BACKEND_ACCESS_TOKEN } from "../../config/global.json";
import { paramCase } from "param-case";

class AppController implements Controller {
  public path = "/";
  public router = express.Router();
  private backend = new BackendService({
    header: {
      Authorization: "Bearer " + BACKEND_ACCESS_TOKEN,
    },
  });

  constructor() {
    this.initRoutes();
  }

  public initRoutes() {
    this.router.get("/apps", this.getApps);
    this.router.get("/apps/:id", this.getApp);
    this.router.get("/apps/:id/databases", this.getDatabasesByApp);
    this.router.post("/apps", this.createApp);
    this.router.patch("/apps/:id", this.updateApp);
    this.router.delete("/apps/:id", this.deleteApp);
  }

  public getApps = async (req: Request, res: Response) => {
    try {
      const {
        data: { data },
      } = await this.backend.find({
        tableName: "apps",
        query: {
          userId: req.user.id,
        },
      });

      return res.status(200).json({ message: "success", data });
    } catch (e) {
      console.log("Failed get apps ", e);
      return res.status(500).json({ message: "Failed to get apps" });
    }
  };

  public getApp = async (req: Request, res: Response) => {
    try {
      const { data } = await this.backend.get({
        tableName: "apps",
        id: req.params.id,
      });

      if (data.userId != req.user.id)
        return res.status(401).json({ message: "not allowed" });

      return res.status(200).json({ message: "success", data });
    } catch (e) {
      console.log("Failed get app ", e);
      return res.status(500).json({ message: "Failed to get app" });
    }
  };

  public createApp = async (req: Request, res: Response) => {
    const data: AppData = req.body;
    const io = req.io;
    let body = {};
    data.user = req.user;
    data.init = false;

    try {
      const {
        data: { total: exist },
      } = await this.backend.find({
        tableName: "apps",
        query: {
          or: [{ name: data.name }, { domain: data.domain }],
          serverId: data.server.id,
          userId: data.user.id,
        },
      });

      if (exist)
        return res.status(403).json({ message: "Name or domain already used" });

      const { data: server } = await this.backend.get({
        tableName: "servers",
        id: data.server.id,
      });

      /*
       * create new system user
       * if user wants to create and use new system user
       */

      if (data.createUser) {
        const systemUser = new SystemUserService({
          ...data.systemUser,
          user: data.user,
          server,
        });

        try {
          // if(data.systemUser.sshKey) {
          //   const name = paramCase(data.server.name).replace("-", "") + makeKey(5)

          //   systemUser.sshKey({
          //     name,
          //     key: data.systemUser.sshKey,
          //     user: data.user
          //   })

          //   const { data: sshKey } = await this.backend.create({
          //     tableName: 'ssh-keys',
          //     body: {
          //       name,
          //       serverId: data.server.id,
          //       userId: data.user.id
          //     }
          //   })

          //   data.systemUser.sshKeyId = sshKey.id

          //   data.systemUser.sshKey = name
          //   systemUser.setData({ ...data.systemUser, user: data.user, server })
          // }

          await systemUser.create();

          const { data: createdUser } = await this.backend.create({
            tableName: "systemusers",
            body: {
              username: data.systemUser.username,
              serverId: data.server.id,
              userId: data.user.id,
              ...(data.systemUser.sshKeyId
                ? { sshKeyId: data.systemUser.sshKeyId }
                : {}),
            },
          });

          data.systemUser.id = createdUser.id;
        } catch (e) {
          this.backend.remove({
            tableName: "systemusers",
            id: data.systemUser.id,
          });
          return res.status(500).json({
            message: "Failed to create app: Error when creating system user",
          });
        }
      }

      const appFields = {
        serverId: data.server.id,
        systemuserId: data.systemUser.id,
        userId: data.user.id,
      };

      /*
       * check if web server or mysql hasn't installed
       * before installing lamp, lemp, or wordpress.
       */
      if (data.type.includes("lamp") || data.type.includes("lemp")) {
        if (data.type.includes("lamp") && !server.apache) {
          data.init = true;
          body = {
            apache: true,
          };
          await this.backend.create({
            tableName: "apps",
            body: {
              name: "Apache",
              type: "apache",
              ...appFields,
            },
          });
        } else if (data.type.includes("lemp") && !server.nginx) {
          data.init = true;
          body = {
            nginx: true,
          };
          await this.backend.create({
            tableName: "apps",
            body: {
              name: "Nginx",
              type: "nginx",
              ...appFields,
            },
          });
        }

        if (!server.mysql) {
          data.init = true;
          body = {
            ...body,
            mysql: true,
          };
          await this.backend.create({
            tableName: "apps",
            body: {
              name: "MySQL",
              type: "mysql",
              ...appFields,
            },
          });
        } else {
          const {
            data: { data: root },
          } = await this.backend.find({
            tableName: "databases",
            query: {
              username: "root",
              serverId: data.server.id,
            },
          });

          data.server.dbRootPass = root[0].password;
        }
      }

      /*
       * check if web server hadn't been chosen,
       * then update database.
       */
      if (!server.webServer) {
        if (["apache", "lamp"].includes(data.type)) {
          body = {
            ...body,
            webServer: "apache",
          };
        } else if (["nginx", "lemp"].includes(data.type)) {
          body = {
            ...body,
            webServer: "nginx",
          };
        }
      }

      /*
       * store app data in database then
       * pass all data to app service
       */
      const { data: createdApp } = await this.backend.create({
        tableName: "apps",
        body: {
          ...data,
          ...appFields,
          status: "loading",
        },
      });

      data.id = createdApp.id;

      //* create database for wordpress
      if (data.type.includes("wp")) {
        await this.backend.create({
          tableName: "databases",
          body: {
            name: paramCase(data.name),
            appId: data.id,
            serverId: data.server.id,
            userId: data.user.id,
          },
        });
      }

      const app = new AppService(data, io);

      if (app.apps.includes(data.type)) {
        body = {
          ...body,
          [data.type]: true,
        };
      }

      app.create(body);

      return res
        .status(200)
        .json({ message: "success", data: { id: data.id, type: data.type } });
    } catch (e) {
      console.log("Failed create app ", e);
      await this.backend.remove({
        tableName: "apps",
        id: data.id,
      });
      // await this.backend.remove({ tableName: 'app', id: data.id })
      return res.status(500).json({ message: "Failed to create app", e });
    }
  };

  public updateApp = async (req: Request, res: Response) => {
    try {
      await this.backend.patch({
        tableName: "apps",
        id: req.params.id,
        body: req.body,
      });

      return res.status(200).json({ message: "success" });
    } catch (e) {
      console.log("Failed update app ", e);
      return res.status(500).json({ message: "Failed to update app" });
    }
  };

  public deleteApp = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
      this.backend.patch({
        tableName: "apps",
        id,
        body: {
          status: "loading",
        },
      });

      const { data: appData } = await this.backend.get({
        tableName: "apps",
        id,
      });

      appData.user = req.user;

      //* delete app
      const app = new AppService(appData, req.io);
      await app.delete();

      return res.status(200).json({ message: "success" });
    } catch (e) {
      console.log("Failed delete app ", e);
      return res.status(500).json({ message: "Failed to delete app" });
    }
  };

  // ----------------

  public getDatabasesByApp = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const {
        data: { data },
      } = await this.backend.find({
        tableName: "databases",
        query: {
          appId: id,
        },
      });

      return res.status(200).json({ message: "success", data });
    } catch (e) {
      console.log("Failed get databases ", e);
      return res.status(500).json({ message: "Failed to get databases" });
    }
  };
}

export default AppController;
