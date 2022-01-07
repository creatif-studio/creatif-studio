import express, { Request, Response } from 'express'
import { Application } from 'express'
import { createServer } from "http";
import { Server, Socket } from "socket.io";
interface Io {
    io: any
}
class App {
    public app: Application
    public port: number
    public httpServer
    public io

    constructor(appInit: { port: number; middleWares: any; controllers: any; plugins: any }) {
        this.app = express()
        this.port = appInit.port
        this.httpServer = createServer(this.app);
        this.io = new Server(this.httpServer)

        this.middlewares(appInit.middleWares)
        this.socket()
        this.routes(appInit.controllers)
        this.plugins(appInit.plugins)
        this.template()
    }

    private middlewares(middleWares: { forEach: (arg0: (middleWare: any) => void) => void; }) {
        middleWares.forEach(middleWare => {
            this.app.use(middleWare)
        })
    }

    private plugins(plugins: { forEach: (arg0: (middleWare: any) => void) => void; }) {
        plugins.forEach(plugin => {
            this.app.set(plugin.name, plugin)
        })
    }

    private routes(controllers: { forEach: (arg0: (controller: any) => void) => void; }) {
        controllers.forEach(controller => {
            this.app.use('/v1', controller.router)
        })
        this.app.use('/', express.static('public'));
    }

    private template() {
        this.app.set('view engine', 'pug')
    }

    public socket() {
        this.app.use((req: Request & Io, res: Response, next: () => void) => {
            req.io = this.io;
            next()
        })
    }

    public listen() {
        this.httpServer.listen(this.port, () => {
            console.log(`App listening on the http://localhost:${this.port}`)
        })
    }
}

export default App