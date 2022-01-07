import { DatabaseData, ServerConfig } from "../../types";
import { BACKEND_ACCESS_TOKEN } from "../../../config/global.json"

// npm modules
import fs from 'fs-extra';
import path from 'path';
import Git from "../git";
import ScriptService from "../script";
import BackendService from "../backend";

class DatabaseService {
  data?: DatabaseData
  baseDir = null
  git = new Git()
  script = new ScriptService()
  backend = new BackendService({
    header: {
      Authorization: "Bearer " + BACKEND_ACCESS_TOKEN,
    },
  })

  constructor(database?: DatabaseData, io?: any) {
    if (database) {
      if (io) {
        database.io = io
      }
      this.setData(database);
      // this.databaselyConfig(database);  
    }
  }

  public setData = (database: DatabaseData) => {
    if (database) {
      this.data = database;
      this.applyConfig(database);
    }
  }

  private applyConfig = (database: DatabaseData) => {
    if (database) {
      this.script.setConfig({ data: database })
      this.git.setConfig(database)
    }
  }

  public getBaseDirectory = (id?: string, additionalPath?: string): string => {
    id = id || this.data?.user.id;

    let baseDirectory = path.resolve(__dirname, '../../../../scripts/' + id);
    if (additionalPath) baseDirectory += additionalPath;

    return baseDirectory;
  };

  public create = async (data?: DatabaseData): Promise<string> => {
    try {
      const database = data || this.data;
      this.baseDir = this.getBaseDirectory(database.user.id)

      const { name, username, password, app } = database


      // generate base script then run
      this.script.copy()
      this.git.use(app.server.id + '/' + app.systemUser.username)

      this.script.setIP(app.server.ip)
                  .setGroupVars({
                    app: {
                      name,
                      username,
                      password
                    },
                  })
                  .run("mysql-create-single-db", {
                    identifier: database.user.id,
                    successMessage: `Database ${name} created`,
                    errorMessage: `Failed to create ${name}`,
                    afterRun: () => {
                      this.git.rm()
                    },
                    onSuccess: () => {
                      this.backend.patch({
                        tableName: "databases",
                        id: database.id,
                        body: {
                          status: "created"
                        }
                      })
                    },
                    onError: () => {
                      this.backend.remove({
                        tableName: 'databases',
                        id: database.id
                      })
                    }
                  })

      return Promise.resolve("Success");
    } catch (e) {
      return Promise.reject(e?.message);
    }
    
  }

  /**
   * delete single database
   * 
   */
  public delete = async (data?: DatabaseData): Promise<string> => {
    try {
      const database = data || this.data;
      this.baseDir = this.getBaseDirectory(database.user.id)

      const { app, name, username, password } = database

      // generate base script then run
      this.script.copy()
      this.git.use(app.server.id + '/' + app.systemUser.username)

      this.script.setIP(app.server.ip)
                  .setGroupVars({
                    app: {
                      name,
                      username,
                      password
                    },
                  })
                  .run("mysql-delete-single-db", {
                    identifier: database.user.id,
                    successMessage: `Database ${name} deleted`,
                    errorMessage: `Failed to delete ${name}`,
                    afterRun: () => {
                      this.git.rm()
                    },
                    onSuccess: () => {
                      this.backend.remove({
                        tableName: 'databases',
                        id: database.id
                      })
                    },
                    onError: () => {
                      this.backend.patch({
                        tableName: "databases",
                        id: database.id,
                        body: {
                          status: "failed"
                        }
                      })
                    }
                  })

      return Promise.resolve("Success");
    } catch (e) {
      return Promise.reject(e?.message);
    }
  } 

  /**
   * delete multiple database
   * 
   */
  public deleteMany = async (data?: DatabaseData[], index = 0): Promise<string> => {
    try {
      const database = data[index] || this.data;
      this.baseDir = this.getBaseDirectory(database.user.id)

      const { app, name, username, password } = database

      // generate base script then run
      this.script.copy()
      this.git.use(app.server.id + '/' + app.systemUser.username)

      this.script.setIP(app.server.ip)
                  .setGroupVars({
                    app: {
                      name,
                      username,
                      password
                    },
                  })
                  .run("mysql-delete-single-db", {
                    identifier: database.user.id + "deletedatabase",
                    afterRun: () => {
                      this.git.rm()
                      this.deleteMany(data, index + 1)
                    },
                    onSuccess: () => {
                      this.backend.remove({
                        tableName: 'databases',
                        id: database.id
                      })
                    },
                    onError: () => {
                      this.backend.patch({
                        tableName: "databases",
                        id: database.id,
                        body: {
                          status: "failed"
                        }
                      })
                    }
                  })

      return Promise.resolve("Success");
    } catch (e) {
      return Promise.reject(e?.message);
    }
  } 

  public uninstall = async (data?): Promise<string> => {
    try {
      const database = data || this.data;
      this.baseDir = this.getBaseDirectory(database.user.id)

      // generate base script then run
      this.script.copy()
                  .setIP(database.server.ip)
                //  .run("mysql-uninstall")

      return Promise.resolve("Success");
    } catch (e) {
      return Promise.reject(e?.message);
    }
  } 
}

export default DatabaseService;