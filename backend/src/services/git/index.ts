import { ServerData } from "../../types";

import path from 'path';
import fs from 'fs';
import cp from 'child_process';
import { paramCase } from "param-case";

class Git {
  data = null
  baseDir: string = null
  folder = {
    server: "/optimiz",
    app: "/core"
  }

  constructor(config?) {
    if(config)
      this.setConfig(config)
  }

  public setConfig = (data) => {
    this.data = data
    this.baseDir = path.resolve(__dirname, '../../../../scripts/' + data.user.id + '/group_vars')
  }

  public init = () => {
    cp.execSync("git init", {
      cwd: this.baseDir,
    })

//     const configGit = 
// `# exclude scripts directory
// `
//     fs.writeFileSync(`${this.baseDir}/.gitignore`, configGit)

    console.log(`git initiated in user ${this.data.user.id}`)

    return this;
  }

  public commit = (message: string) => {
    cp.execSync(`git add . && git commit -m '${message}'`, {
      cwd: this.baseDir,
    })

    return this;
  }

  public tag = (name: string) => {
    cp.execSync(`git tag ${name}`, {
      cwd: this.baseDir,
    })

    return this;
  }

  public deleteTag = (name: string) => {
    cp.execSync(`git tag -d ${name}`, {
      cwd: this.baseDir,
    })

    return this;
  }

  public use = (tag: string) => {
    cp.execSync(`git checkout -f -b exec ${tag}`, {
      cwd: this.baseDir,
    })
  }

  /**
   * Merge and delete branch
   */
  public merge = () => {
    cp.execSync(`git checkout -f master && git merge -X theirs exec && git branch -D exec`, {
      cwd: this.baseDir,
    })
  }

  public rm = () => {
    cp.execSync(`git checkout -f master && git branch -D exec`, {
      cwd: this.baseDir,
    })
  }

  public delete = () => {
    cp.execSync("rm -rf .git", {
      cwd: this.baseDir,
    })
  }

}

export default Git;