import { config } from 'dotenv';


config();

export default {
    port: parseInt(process.env.PORT) || parseInt(1433),
    dbUser: process.env.DB_USER || '',
    dbPassword: process.env.DB_PASSWORD || '',
    dbServer: process.env.DB_SERVER || '',
    dbDatabase: process.env.DB_DATABASE || ''
}
