

import mysql = require('mysql');
import { connect } from 'http2';

export default class Mysql {
    private static _instance: Mysql;

    connection: mysql.Connection;
    conectado: boolean = false;

    constructor( ) {
        console.log('Clase inicializada');
        this.connection = mysql.createConnection({
            host: 'localhost',
            user: 'node_user',
            password: '1234',
            database: 'node-db'
        });

        this.conectarDB();
    }

    public static get instance() {
        return this._instance || (this._instance = new this());
    }

    private conectarDB() {
        this.connection.connect(( err: mysql.MysqlError) => {
            if ( err ) {
                console.log(err.message);
                return;
            }

            this.conectado = true;
            console.log('Base de datos online');
        })
    }

}