"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = require("mysql");
class Mysql {
    constructor() {
        this.conectado = false;
        console.log('Clase inicializada');
        this.connection = mysql.createConnection({
            host: 'localhost',
            user: 'node_user',
            password: '1234',
            database: 'node-db'
        });
        this.conectarDB();
    }
    conectarDB() {
        this.connection.connect((err) => {
            if (err) {
                console.log(err.message);
                return;
            }
            this.conectado = true;
            console.log('Base de datos online');
        });
    }
}
exports.default = Mysql;
