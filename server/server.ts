import express = require('express');

export default class Server {
    public app: express.Application;
    public port:number;

    constructor( port:number ) {
        this.port = port;
        this.app = express();
    }

    static init ( puerto:number ) {
        return new Server( puerto )
    }

    start( callback: Function ) {
        this.app.listen( this.port, callback() );
    }
}
