
///////Modulo de coneccion y configuracion de base de datos////

const sql = require("mssql");
const configDB = require("./db");

async function getconection() {
  try {
    const pool = await sql.connect(configDB);

    return pool;
  } catch (error) {
    console.log(error);
  }
}
module.exports = {
  getconection: getconection,
};
