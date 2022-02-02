
//// configuriones de base de datos/////

const config = require("../config");
const configDB = {
  user: config.DB_USER,
  password: config.DB_PASSWD,
  server: config.DB_SERVER,
  database: config.DB_NAME,
  options: {
    instancename: "SQLEXPRESS",
    trustServerCertificate: true,
  },
};

module.exports = configDB;

