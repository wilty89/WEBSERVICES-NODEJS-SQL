///// Importaciones de RUTAS
const routerPeliculas = require("./routes/peliculas.routes");
const routerActores = require("./routes/actores.routes");

////// MIDDLEWARE CORS PARA PERMITIR ACCESO A RECURSOS DESDE OTROS DOMINIOS O LOCACIONES( EVITA EL ERROR CORS POR NAVEGADOES) ///

const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

///// RUTA PARA GUARDAR IMAGENES /////
//app.use(express.static(path.join(__dirname, 'public')));
app.use("/public", express.static(`${__dirname}/views/image`));
///http://localhost:4000/public/Portada-1632764806601.png

/////////  MIDDLEWARES  utilizados en Express ////////
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/////// LLamada de Rutas //////
app.use("/", routerPeliculas);
app.use("/", routerActores);

//// MIDDLEWARE QUE EVITA ERROR CORS ( POR SI ACASO)
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
  next();
});

//// EN CASO DE ERROR 404 /////
app.use(function (req, res, next) {
 
  let err = new Error("Pagina no encontrada.");
  err.status = 404;
  next(err);
});

/// EN CASO DE ERROR 500 /////

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;
