///////// importacion de Conecion Database /////
const { getconection } = require("../Database/connection");
//// Importacion de los querys///////
const querys = require("../Database/querys");
const sql = require("mssql");

//////// Peticion Get//////
const obtenerPeliculas = async (req, res) => {
  const pool = await getconection();
  const request = await pool.request().query(querys.obtenerPeliculas);

  res.json(request.recordsets);
};
////// peticion GET por ID //////
const obtenerPeliculasPorId = async (req, res) => {
  try {
    const pool = await getconection();
    const request = await pool
      .request()
      .query(querys.obtenerPeliculasPorId + req.params.ID);
    res.json(request.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
////// peticion GET por Nombre //////
const obtenerPeliculasPorNombre = async (req, res) => {
  try {
    const pool = await getconection();
    const request = await pool
      .request()
      .query(querys.obtenerPeliculasPorNombre + req.query.Nombre);
    res.json(request);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const anadirPelicula = async (req, res) => {
  /*
  if(Nombre == null || Autor == null) {
      return res.status(400).json({ msg: "Bad Request. Please fill all fields"});
  }
*/
  try {
    const { Nombre, Actor, Ano, Genero } = req.body;
    const Portada = req.file.filename;
   
    const pool = await getconection();
    await pool
      .request()
      .input("Nombre", sql.VarChar, Nombre)
      .input("Actor", sql.VarChar, Actor)
      .input("Ano", sql.Int, Ano)
      .input("Genero", sql.VarChar, Genero)
      .input("Portada", sql.VarChar, Portada)
      .query(querys.anadirPelicula);
    console.log(Nombre, Actor, Ano, Genero, Portada);
    res.json({ Nombre, Actor, Ano, Genero, Portada });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
const actualizarPelicula = async (req, res) => {
  try {
    const { Nombre, Actor, Ano, Genero, Portada } = req.body;
    const { ID } = req.params;
    const pool = await getconection();
    await pool
      .request()
      .input("Nombre", sql.VarChar, Nombre)
      .input("Actor", sql.VarChar, Actor)
      .input("Ano", sql.Int, Ano)
      .input("Genero", sql.VarChar, Genero)
      .input("Portada", sql.VarChar, Portada)
      .input("ID", sql.Int, ID)
      .query(querys.actualizarPelicula);
    //console.log(Nombre, Actor, Ano, Genero, Portada);
    res.json({ Nombre, Actor, Ano, Genero, Portada });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
const eliminarPelicula = async (req, res) => {
  try {
    const pool = await getconection();
    await pool
      .request()
      .input("id", req.params.ID)
      .query(querys.eliminarPelicula);

    //if (result.rowAffected[0] === 0) return res.sendStatus(404);
    res.sendStatus(204);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
module.exports = {
  obtenerPeliculas,
  obtenerPeliculasPorId,
  anadirPelicula,
  actualizarPelicula,
  eliminarPelicula,
  obtenerPeliculasPorNombre,
};
