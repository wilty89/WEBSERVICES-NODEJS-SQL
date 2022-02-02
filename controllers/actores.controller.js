///////// importacion de Conecion Database /////
const { getconection } = require("../Database/connection");
const sql = require("mssql");
//// Importacion de los querys///////
const querys = require("../Database/querys");

//////// Peticion Get//////
const obtenerActores = async (req, res) => {
  const pool = await getconection();
  const request = await pool.request().query("select * from Actores");
  res.json(request.recordsets);
};
 ////// peticion GET por ID //////
const obtenerActoresPorId = async (req, res) => {
  try {
    const pool = await getconection();
    const request = await pool
      .request()
      .query("select * from Actores where IdActores=" + req.params.ID);
    res.json(request.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
///////// peticion Post ///////
const anadirActores = async (req, res) => {
  try {
    const { NombreActores, FechaNacimiento, SexoActores } =
      req.body;
      const FotoActores = req.file.filename;
    const pool = await getconection();
    await pool
      .request()
      .input("NombreActores", sql.VarChar, NombreActores)
      .input("FechaNacimiento", sql.Date, FechaNacimiento)
      .input("SexoActores", sql.VarChar, SexoActores)
      .input("FotoActores", sql.VarChar, FotoActores)
      .query(querys.anadirActores);

    console.log(NombreActores, FechaNacimiento, SexoActores, FotoActores);
    res.json({ NombreActores, FechaNacimiento, SexoActores, FotoActores });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
//////////// Peticion Put ////
const actualizarActores = async (req, res) => {
  try {
    const { NombreActores, FechaNacimiento, SexoActores, FotoActores } =
      req.body;
    const { ID } = req.params;
    const pool = await getconection();
    await pool
      .request()
      .input("NombreActores", sql.VarChar, NombreActores)
      .input("FechaNacimiento", sql.Date, FechaNacimiento)
      .input("SexoActores", sql.VarChar, SexoActores)
      .input("FotoActores", sql.NChar, FotoActores)
      .input("IdActores", sql.Int, ID)
      .query(querys.actualizarActores);

    res.json({ ID, NombreActores, FechaNacimiento, SexoActores, FotoActores });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
////////////// Peticion Delete /////////
const eliminarActores = async (req, res) => {
  try {
    const pool = await getconection();
    await pool
      .request()
      .input("IdActores", req.params.ID)
      .query(querys.eliminarActores);

    //if (result.rowAffected[0] === 0) return res.sendStatus(404);
    res.sendStatus(204);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

/////// Exportacion de las Funciones controladoras Hacia Ruta //////
module.exports = {
  obtenerActores,
  obtenerActoresPorId,
  anadirActores,
  actualizarActores,
  eliminarActores,
};
