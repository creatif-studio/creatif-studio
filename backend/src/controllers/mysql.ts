import * as express from "express";

// types
import { Request, AppData, Controller } from "../types";
import { Response } from "express";

// services
import { BackendService, AppService, SystemUserService } from "../services";

// config
import { BACKEND_ACCESS_TOKEN } from "../../config/global.json";
import { paramCase } from "param-case";

class MysqlController implements Controller {
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
    this.router.post("/mysql", this.postMysql);
    this.router.get("/mysql", this.getMysql);
  }

  public getMysql = async (req: Request, res: Response) => {
    try {
      const {
        data: { data },
      } = await this.backend.find({
        tableName: "mysql",
      });

      return res.status(200).json({ message: "Success get mysql list", data });
    } catch (e) {
      console.log("Failed get apps ", e);
      return res.status(500).json({ message: "Failed to get apps" });
    }
  };

  public postMysql = async (req: Request, res: Response) => {
    try {
      await this.backend.create({
        tableName: "mysql",
        body: {
          name: 'mysql:8.0',
          repository: 21179,
          tag_status: 'active',
          v2: true,
        },
      });

      await this.backend.create({
        tableName: "mysql",
        body: {
          name: 'mysql:8',
          repository: 21179,
          tag_status: 'active',
          v2: true,
        },
      });

      await this.backend.create({
        tableName: "mysql",
        body: {
          name: 'mysql:5.7',
          repository: 21179,
          tag_status: 'active',
          v2: true,
        },
      });

      await this.backend.create({
        tableName: "mysql",
        body: {
          name: 'mysql:5.6',
          repository: 21179,
          tag_status: 'active',
          v2: true,
        },
      });

      await this.backend.create({
        tableName: "mysql",
        body: {
          name: 'mysql:5',
          repository: 21179,
          tag_status: 'active',
          v2: true,
        },
      });

      return res.status(200).json({ message: "Success create seed mysql list"});
    } catch (e) {
      console.log("Failed get apps ", e);
      return res.status(500).json({ message: "Failed to get apps" });
    }
  };
}

export default MysqlController;
