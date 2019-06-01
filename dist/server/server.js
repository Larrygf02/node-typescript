"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
class Server {
    constructor(port) {
        this.port = port;
        this.app = express();
    }
    static init(puerto) {
        return new Server(puerto);
    }
    start(callback) {
        this.app.listen(this.port, callback());
    }
}
exports.default = Server;
