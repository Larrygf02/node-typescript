

import Server from './server/server';
import router from './router/router';
import Mysql from './mysql/mysql';

const server = Server.init( 3000);
server.app.use( router )

//Mysql Instance
//Mysql.instance;

server.start( () => {
    console.log('Servidor corriendo en el puerto de 3000');
})