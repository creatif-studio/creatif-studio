import App from "./app";
import express from "express";
import cors from "cors";
import authentication from "./middlewares/authentication";
import { MysqlController, UserController } from "./controllers";
import AppController from "./controllers/app";

const app = new App({
  port: 5000,
  controllers: [new UserController(), new AppController(), new MysqlController()],
  plugins: [],
  middleWares: [
    express.json({ limit: "50mb" }),
    express.urlencoded({ extended: true }),
    express.static("public"),
    cors(),
    authentication,
  ],
});

app.listen();
