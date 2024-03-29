

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

    static ejecutarQuery( query: string, callback: Function) {
         this.instance.connection.query( query, (err, results: Object[], fields) => {
            if ( err ) {
                console.log('Error en query');
                console.log(err);
                return callback(err);
            }
            if (results.length === 0) {
                callback('El registro solicitado no existe')
            }else {
                callback( null, results);
            }
         })   
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