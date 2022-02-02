const express = require("express");
const router = express.Router();

////// midlleware MULTER para subir Foto al servidor
const upload = require("../middlewares/middleware");

////// IMPORTACION DE LOS CONTROLADORES ///////
const {
  obtenerActores,
  obtenerActoresPorId,
  anadirActores,
  actualizarActores,
  eliminarActores,
} = require("../controllers/actores.controller");

/// ENDPOINTS ( RUTAS) ///
router.get("/actores", obtenerActores);
router.get("/actores/:ID", obtenerActoresPorId);
router.post("/anadir_actor", upload.single("FotoActores"), anadirActores);
router.put("/actualizar_actor/:ID", actualizarActores);
router.delete("/eliminar_actor/:ID", eliminarActores);

module.exports = router;
