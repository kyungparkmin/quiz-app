const dotenv = require('dotenv');
dotenv.config();

const config = {
  development : {
    username : "root",
    password : "1234",
    database : "quiz_db1",
    host : "localhost",
    port : 3307,
    dialect : "mysql"
  }
}

module.exports = config;