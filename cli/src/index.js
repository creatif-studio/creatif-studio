#!/usr/bin/env node
const shell = require("./shell");
const { login } = require("./crud");
const ora = require("ora");
const spinner = ora("Loading");

const run = async () => {
  try {
    const credential = await shell.askCredentials();
    spinner.start();

    try {
      const response = await login(credential);
      console.log(response)
      spinner.clear()
      process.exit(1);
    } catch (error) {
      if (error.message) {
        spinner.text = `${error.message} ${error.status}`;
        spinner.fail();
      }
      process.exit(1);
    }
  } catch (error) {
    spinner.fail();
    process.exit(0);
  }
};

run();
