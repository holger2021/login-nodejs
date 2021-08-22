import config from '../config'
const sqlServer = require('mssql');

// ajustes de conexion a la db
const dbSettings = {
    user: config.dbUser,
    password: config.dbPassword,
    server: config.dbServer,
    database: config.dbDatabase,
    port: config.port,
    options: {
        encrypt: true, // for azure
        trustServerCertificate: true // change to true for local dev / self-signed certs
    }
}

const getConnection = async () => {
    try {
        const pool = await sqlServer.connect(dbSettings);
        console.log(`Conexion a microsoft Sql Server: ${ 'establecida'.green }`);
        return pool;
    } catch (e) {
        console.log(`Error connecting to sql server...`.red);
        console.log(e)
    }
}

export {
    getConnection, sqlServer
}
