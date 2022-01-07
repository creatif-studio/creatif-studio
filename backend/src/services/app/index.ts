import { AppConfig, AppData, ServerConfig, SystemUserData } from "../../types";
import { BACKEND_ACCESS_TOKEN } from "../../../config/global.json"

// npm modules
import fs from 'fs-extra';
import path from 'path';
import Git from "../git";
import ScriptService from "../script";
import { paramCase } from "param-case";
import BackendService from "../backend";
import DatabaseService from "../database";
import sleep from "../../utils/sleep";

class AppService {
  data?: AppData
  baseDir = null
  git = new Git()
  script = new ScriptService()
  backend = new BackendService({
    header: {
      Authorization: "Bearer " + BACKEND_ACCESS_TOKEN,
    },
  })
  apps = ["apache", "nginx", "mysql", "mongodb", "docker"]
  tags = {
    create: {
      full: "full-install",
      single: "create-single-app",
    },
    delete: {
      full: "full-uninstall",
      single: "delete-single-app",
    }
  }

  constructor(app: AppData, io?: any) {
    if (app) {
      if (io) {
        app.io = io
      }
      this.setData(app);
      // this.applyConfig(app);  
    }
  }

  public setData = (app: AppData) => {
    if (app) {
      this.data = app;
      this.applyConfig(app);
    }
  }

  private applyConfig = (app: AppData) => {
    if (app) {
      this.script.setConfig({ data: app })
      this.git.setConfig(app)
    }
  }

  public getBaseDirectory = (id?: string, additionalPath?: string): string => {
    id = id || this.data?.user.id;

    let baseDirectory = path.resolve(__dirname, '../../../../scripts/' + id);
    if (additionalPath) baseDirectory += additionalPath;

    return baseDirectory;
  };

  public create = async (body): Promise<string> => {
    try {
      const app = this.data;
      this.baseDir = this.getBaseDirectory(app.user.id)

      const { title, username: wpUser, password: wpPass, email } = app.wordpress || {}

      let tag = null
      if(this.apps.includes(app.type)) tag = app.type + "-install"
      else tag = app.type + '-' + this.tags.create[app.init ? "full" : "single"]

      // generate base script then run
      this.script.copy()
      this.git.use(app.server.id + '/' + app.systemUser.username)

      this.script.setIP(app.server.ip)
                  .setGroupVars({
                    app: {
                      name: app.name,
                      domain: app.domain,
                    },
                    wordpress: {
                      title,
                      username: wpUser,
                      password: wpPass,
                      email
                    },
                    database: {
                      password: app.server.dbRootPass
                    }
                  })
                  .run(tag, {
                    successMessage: `App '${app.name}' created`,
                    errorMessage: `Failed to create ${app.name}`,
                    onSuccess: () => {
                      this.backend.patch({
                        tableName: 'apps',
                        id: app.id,
                        body: {
                          status: "created"
                        }
                      })
                      this.backend.patch({
                        tableName: 'servers',
                        id: app.server.id,
                        body
                      })
                      this.git.rm()
                    },
                    onError: () => {
                      this.backend.remove({
                        tableName: 'apps',
                        id: app.id
                      })
                      this.git.rm()
                    }
                  })

      
      console.log(tag);
                
      return Promise.resolve("Success");
    } catch (e) {
      this.git.rm()
      return Promise.reject(e?.message);
    }
    
  }

  public delete = async (data?: AppData): Promise<string> => {
    try {
      const app = data || this.data;
      this.baseDir = this.getBaseDirectory(app.user.id)

      let tag = null
      if(this.apps.includes(app.type)) tag = app.type + "-uninstall"
      else tag = app.type + '-' + this.tags.delete[app.init ? "full" : "single"]

      // generate base script
      this.script.copy()
      this.git.use(app.server.id + '/' + app.systemUser.username)

      this.script.setIP(app.server.ip)
                  .setGroupVars({
                      app: {
                        name: app.name,
                        domain: app.domain,
                      }
                    })
                  .run(tag, {
                    afterRun: () => {
                      this.git.rm()
                    },
                    identifier: app.user.id,
                    successMessage: `App '${app.name}' deleted`,
                    errorMessage: `Failed to delete ${app.name}`,
                    onSuccess: async () => {
                      if (app.databases.length) {
                        for (const db of app.databases) {
                          db.app = app
                          db.user = app.user
                          const database = new DatabaseService(db)
                          database.delete()
                          await sleep(4000)
                        }
                      }

                      console.log("delete app");

                      this.backend.remove({
                        tableName: 'apps',
                        id: app.id
                      })

                      if(this.apps.includes(app.type)) {
                        const body = {
                          [app.type]: false
                        }
                        this.backend.patch({
                          tableName: 'servers',
                          id: app.server.id,
                          body
                        })
                      }
                    },
                    onError: () => {
                      this.backend.patch({
                        tableName: 'apps',
                        id: app.id,
                        body: {
                          status: "failed"
                        }
                      })
                    }
                  })

      console.log(tag);
      
      return Promise.resolve("Success");
    } catch (e) {
      this.git.rm()
      return Promise.reject(e?.message);
    }
  }
  
}

export default AppService;