"use strict";
const inquirer = require("inquirer");

process.on("SIGINT", () => console.log("\n"));

module.exports = {
  askCredentials: () => {
    const questions = [
      {
        name: "email",
        type: "input",
        message: "CloudBoz Email:",
        validate: function (value) {
          if (value.length) {
            return true;
          } else {
            return "Please enter your cloudboz e-mail address.";
          }
        },
      },
      {
        name: "password",
        type: "password",
        mask: "*",
        message: "Password:",
        validate: function (value) {
          if (value.length) {
            return true;
          } else {
            return "Please enter your password.";
          }
        },
      },
    ];
    return inquirer.prompt(questions);
  },
};
