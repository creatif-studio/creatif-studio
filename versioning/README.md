# CloudBoz

> Repository API for CloudBoz

## About

This project uses [Feathers](http://feathersjs.com). An open source web framework for building modern real-time applications.

## Getting Started

Getting up and running is as easy as 1, 2, 3.

1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
2. Install your dependencies

   ```
   cd path/to/cloudboz-backend
   npm install
   ```

3. Start your app

   ```
   npm run dev
   ```

Application will run on port **9000**

## Services

- [x] User
- [x] Server
- [x] App
- [x] Database
- [x] System User
- [x] Email Verification
- [x] Partner

## Schema

```
type Server {
  name: String
  ip: String
  webServer: WebServer!
  apache: Boolean
  nginx: Boolean
  apache: Boolean
  mysql: Boolean
  mongodb: Boolean
  dokcer: Boolean
  apps: [App]
  systemusers: [SystemUser]
  user: User!
}

enum WebServer {
  apache
  nginx
}


type SystemUser {
  username: String
  server: Server!
  user: User!
}

type App {
  name: String!
  domain: String
  type: String!
  server: Server!
  systemuser: Systemuser!
  databases: [Database]
  user: User!
}

type Database {
  name: String!
  username: String
  app: App!
  server: Server
}

type User {
  name: String!
  email: EmailAddress!
  password: String!
  phone: String
  verified: Boolean
  country: String
  province: String
  job: String
  servers: [Server]
}

type EmailVerification {
  token: String!
  email: String!
  user: User!
}

type Partner {
  name: String
  image: String
  customUrl: String
  url: String
}
```
