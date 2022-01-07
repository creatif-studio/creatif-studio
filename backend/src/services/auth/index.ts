import path from 'path';
import fs from 'fs-extra';
import { RegisterData } from "../../types"
import Git from '../git';
import Sendgrid from '../email/sendgrid';
import EmailService from '../email';
import ScriptService from '../script';

class AuthService {
  data?: RegisterData = null
  baseDir? = null
  email = new EmailService(null)
  git = new Git()
  script = new ScriptService()

  constructor(user) {
    if (user) {
      this.setData(user);
    }
  }

  public setData = (user: RegisterData) => {
    if (user) {
      this.data = user;
      this.applyConfig(user);
    }
  }

  private applyConfig = (user: RegisterData) => {
    if (user) {
      this.email.setData(user)
      this.git.setConfig({ user })
      this.script.setConfig({ data: { user } })
    }
  }

  private createBaseDirectory = (user?: RegisterData): void => {
    const fullPath = path.resolve(__dirname, '../../../../scripts/' + user.id);
    if (!fs.existsSync(fullPath)) {
      fs.mkdirSync(fullPath);
    }
    this.baseDir = fullPath
  }

  private createConfigFile = () => {
    const ignore = 
``
    fs.writeFileSync(`${this.baseDir}/.gitignore`, ignore)
  }

  /**
   * It will create a directory and init git when user register
   */
  public register = async (data?: RegisterData) => {
    const user = data || this.data;

    this.createBaseDirectory(user);
    this.script.copy().createDirectory('files');
    this.git.init().commit('base');
    
    // this.createConfigFile()
    try {
      await this.email.sendVerificationEmail()
      return Promise.resolve("success")
    } catch (e) {
      console.log(e)
      return Promise.reject(e)
    }
  }

  public resend = async (data?: RegisterData) => {
    try {
      await this.email.sendVerificationEmail()
      return Promise.resolve("success")
    } catch (e) {
      console.log(e)
      return Promise.reject(e)
    }
  }

  public forgetPassword = async (data?: RegisterData) => {
    try {
      await this.email.sendForgetPassword()
      return Promise.resolve("success")
    } catch (e) {
      console.log(e)
      return Promise.reject(e)
    }
  }
}

export default AuthService