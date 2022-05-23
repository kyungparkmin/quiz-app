const dotenv = require('dotenv');
dotenv.config();

const config = {
  development : {
    username : "root",
    password : process.env.PASSWORD,
    database : process.env.DATABASE,
    host : "localhost",
    port : 3307,
    dialect : "mysql"
  }
}

module.exports = config;