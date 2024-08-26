const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();


const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    waitForConnections: true,
    connectionLimit: 10,
    idleTimeout: 30000,
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 300000,
    connectTimeout: 9000000,

    ssl: {
        rejectUnauthorized: false

    }


});

module.exports = pool;