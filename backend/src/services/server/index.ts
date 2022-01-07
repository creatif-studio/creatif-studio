import { AppData, ServerData, SystemUserData } from "../../types";
import { BACKEND_ACCESS_TOKEN } from "../../../config/global.json"

// npm modules
import path from 'path';
import Git from "../git";
import ScriptService from "../script";
import BackendService from "../backend";
import AppService from "../app";

import sleep from "../../utils/sleep";
import DatabaseService from "../database";

class ServerService {
  data?: ServerData
  baseDir = null
  git = new Git()
  script = new ScriptService()
  backend = new BackendService({
    header: {
      Authorization: "Bearer " + BACKEND_ACCESS_TOKEN,
    },
  })

  constructor(server?: ServerData, io?: any) {
    if (server) {
      if (io) {
        server.io = io
      }
      this.setData(server);
    }
  }

  public setData = (server: ServerData) => {
    if (server) {
      this.data = server;
      this.applyConfig(server);
    }
  }

  private applyConfig = (server: ServerData) => {
    if (server) {
      this.git.setConfig(server)
      this.script.setConfig({ data: server })
    }
  }

  public getBaseDirectory = (id?: string, additionalPath?: string): string => {
    id = id || this.data?.user.id;

    let baseDirectory = path.resolve(__dirname, '../../../../scripts/' + id);
    if (additionalPath) baseDirectory += additionalPath;

    return baseDirectory;
  };

  public connect = (data?: ServerData): string => {
    
      const server = data || this.data;
      this.baseDir = this.getBaseDirectory(server.user.id)
      
      
      const sysUser = {
        username: server.systemUser.username,
        password: server.systemUser.password,
        sshKey: server.systemUser.sshKey
      }

      // generate base script then run
      this.script.copy()
                  .setIP(server.ip)
                  .setGroupVars({ 
                    ansible: sysUser,
                    database: {
                      password: server.dbRootPass
                    }
                  })
                  .run('connect-server', {
                    onError: () => {
                      this.backend.remove({
                        tableName: 'servers',
                        id: server.id
                      })
                      this.backend.remove({
                        tableName: 'systemusers',
                        id: server.systemUser.id
                      })
                      this.git.deleteTag(server.id + '/' + server.systemUser.username)
                    }
                  })

      this.git.commit(server.id + '/' + server.systemUser.username)
              .tag(server.id + '/' + server.systemUser.username)

      return "Success";
  }

  public createUser = async (data?: ServerData): Promise<string> => {
    try {
      const server = data || this.data;
      this.baseDir = this.getBaseDirectory(server.user.id)

      // generate base script
      this.script.copy()
                  .setIP(server.ip)


      return Promise.resolve("Success");
    } catch (e) {
      return Promise.reject(e?.message);
    }
    
  }

  public delete = async (data?: ServerData): Promise<string> => {
    try {
      const server = data || this.data;
      this.baseDir = this.getBaseDirectory(server.user.id)
      
      const io = server.io

      // generate base script
      this.script.copy()
                 .setIP(server.ip)

      this.git.use(server.id + '/' + server.systemUsers[0].username)


      if (server.databases.length) {
        for (const db of server.databases) {
          const { name, username, password } = db

          this.script.setGroupVars({
            app: {
              name,
              username,
              password
            },
          })

          try {
            console.log("Deleting database: " + name);
            await this.script.exec("mysql-delete-single-db")
  
            this.backend.remove({
              tableName: 'databases',
              id: db.id
            })
          } catch (error) {
            console.log("Error deleting database: " + name, error);
          }
        }
      }

      this.git.rm()

      if (server.apps.length) {
        for (const app of server.apps) {
          this.backend.patch({
            tableName: 'apps',
            id: app.id,
            body: {
              status: 'loading'
            }
          })

          app.user = server.user
          app.systemUser = server.systemUsers.find(s => s.id == app.systemuserId)

          const appService = new AppService(app, server.io)

          let tag = null
          if(appService.apps.includes(app.type)) tag = app.type + "-uninstall"
          else tag = app.type + '-' + appService.tags.delete[app.init ? "full" : "single"]

          this.git.use(app.server.id + '/' + app.systemUser.username)

          this.script.setGroupVars({
                        app: {
                          name: app.name,
                          domain: app.domain,
                        }
                      })

          try {
            console.log("Deleting app: " + app.name);
            await this.script.exec(tag)
            this.git.rm()
  
            this.backend.remove({
              tableName: 'apps',
              id: app.id
            })
          } catch (error) {
            console.log("Error deleting app: " + app.name, error);
            this.git.rm()
          }
          
        }
      }

      server.systemUsers.map(user => {
        this.backend.remove({
          tableName: 'systemusers',
          id: user.id
        })
      })

      this.backend.remove({
        tableName: 'servers',
        id: server.id
      })

      if(io) io.sockets.emit("done" + server.user.id)

      return Promise.resolve("Success");
    } catch (e) {
      return Promise.reject(e?.message);
    }
    
  }
}

export default ServerService;