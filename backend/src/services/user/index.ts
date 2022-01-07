import { SystemUserData, ServerConfig, SSHKey } from "../../types";
import { BACKEND_ACCESS_TOKEN } from '../../../config/global.json'

// npm modules
import fs from 'fs-extra';
import path from 'path';
import Git from "../git";
import ScriptService from "../script";
import BackendService from "../backend";

class SystemUserService {
  data?: SystemUserData
  baseDir = null
  git = new Git()
  script = new ScriptService()
  backend = new BackendService({
    header: {
      Authorization: "Bearer " + BACKEND_ACCESS_TOKEN,
    },
  })

  constructor(systemUser?: SystemUserData, io?: any) {
    if (systemUser) {
      if(io) {
        systemUser.io = io
      }
      this.setData(systemUser);
      // this.systemUserlyConfig(systemUser);  
    }
  }

  public setData = (systemUser: SystemUserData) => {
    if (systemUser) {
      this.data = systemUser;
      this.applyConfig(systemUser);
    }
  }

  private applyConfig = (systemUser: SystemUserData) => {
    if (systemUser) {
      this.script.setConfig({ data: systemUser })
      this.git.setConfig(systemUser)
    }
  }

  public getBaseDirectory = (id?: string, additionalPath?: string): string => {
    id = id || this.data?.user.id;

    let baseDirectory = path.resolve(__dirname, '../../../../scripts/' + id);
    if (additionalPath) baseDirectory += additionalPath;

    return baseDirectory;
  };

  public create = async (data?: SystemUserData): Promise<string> => {
    try {
      const systemUser = data || this.data;
      this.baseDir = this.getBaseDirectory(systemUser.user.id)

      const { username, password, sshKey } = systemUser

      const { data: { data: users } } = await this.backend.find({
        tableName: 'systemusers',
        query: {
          serverId: systemUser.server.id,
          sort: {
            createdAt: "1"
          }
        }
      })

      // generate base script then run
      this.script.copy()
      this.git.use(systemUser.server.id + '/' + users[0].username)

      this.script.setIP(systemUser.server.ip)
                  .setGroupVars({
                    user: {
                      username,
                      password
                    },
                  })
                  .run("create-system-user", {
                    identifier: systemUser.user.id,
                    successMessage: `System user "${username}" created`,
                    onSuccess: () => {
                      this.script.setGroupVars({
                        ansible: {
                          username,
                          password
                        }
                      })

                      this.git.commit(systemUser.server.id + '/' + username)
                              .tag(systemUser.server.id + '/' + username)
                              .merge()

                      this.backend.patch({
                        tableName: 'systemusers',
                        id: systemUser.id,
                        body: {
                          status: "created"
                        }
                      })
                    },
                    onError: () => {
                      this.backend.remove({
                        tableName: 'systemusers',
                        id: systemUser.id
                      })
                      this.git.rm()
                    }
                  })

      

      return Promise.resolve("Success");
    } catch (e) {
      return Promise.reject(e?.message);
    }
    
  }

  //TODO: support ssh key
  public sshKey = async (data: SSHKey): Promise<string> => {
    try {
      const sshKey = data;
      this.baseDir = this.getBaseDirectory(sshKey.user.id)

      const { name, key } = sshKey
      
      this.script.setConfig({ data: sshKey })
      await this.script.createFile(name, key)
      

      return Promise.resolve("Success");
    } catch (e) {
      return Promise.reject(e?.message);
    }
  }
}

export default SystemUserService;