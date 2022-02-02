const express = require("express");
const router = express.Router();

//const upload1= require("../middlewares/middleware")
const path = require("path");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./views/Image");
  },

  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });

////  METODOS IMPORTADOS (CONTROLADORES)  ///
const {
  obtenerPeliculas,
  obtenerPeliculasPorId,
  anadirPelicula,
  actualizarPelicula,
  eliminarPelicula,
  obtenerPeliculasPorNombre,
} = require("../controllers/peliculas.controller");

///PRUEBA DE FUNCIONANMIENTO////
router.get("/", function (req, res, next) {
  res.send("Wilber Montero");
});

//// ENDDPOINTS (RUTAS) /////
router.get("/peliculas", obtenerPeliculas);
router.get("/peliculas/:ID", obtenerPeliculasPorId);
router.post("/anadir_peliculas", upload.single("Portada"), anadirPelicula);
router.put("/actualizar_peliculas/:ID", actualizarPelicula);
router.delete("/eliminar_peliculas/:ID", eliminarPelicula);
router.get("/peliculas/:Nombre", obtenerPeliculasPorNombre);
module.exports = router;
