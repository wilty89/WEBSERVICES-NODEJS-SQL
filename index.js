///despligue del servidor///
/// Aqui llamo las variables de configuracion, asi como la applicacion./////
const config = require("./config");
const app = require("./app");

app.listen(config.PORT, function () {
  console.log(
    `Servidor Corriendo en la direccion ${config.HOST}:${config.PORT} en estado de ${config.NODE_ENV}`
  );
});
