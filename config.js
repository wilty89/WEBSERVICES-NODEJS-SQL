/// variavles de entorno //
require("dotenv").config();

module.exports = {
  NODE_ENV: process.env.NODE_ENV || "development",
  HOST: process.env.HOST || "127.0.0.1",
  PORT: process.env.PORT || 4000,
  DB_USER: process.env.DB_USER || "wilber",
  DB_PASSWD: process.env.DB_PASSWD || "cono1234",
  DB_NAME: process.env.DB_NAME || "Peliculas",
  DB_port: 1433,
  DB_SERVER: process.env.DB_SERVER || "LAPTOP-HEPJ77D3"
};
