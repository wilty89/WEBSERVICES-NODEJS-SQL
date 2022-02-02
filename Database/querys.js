
//// Querys que van a consultar a la base de datos mediante el Driver de cconexion //////

module.exports = {
  obtenerPeliculas: "select * from Pelicula",
  obtenerPeliculasPorId: "select * from Pelicula where ID=",
  obtenerPeliculasPorNombre: "select * from Pelicula where Nombre=",
  anadirPelicula:
    "INSERT INTO Pelicula (Nombre, Actor, Ano, Genero, Portada) VALUES (@Nombre, @Actor, @Ano, @Genero, @Portada)",
  actualizarPelicula:
    "UPDATE Pelicula SET Nombre= @Nombre, Actor= @Actor, Ano= @Ano, Genero= @Genero, Portada= @Portada WHERE ID= @ID",
  eliminarPelicula: "DELETE FROM Pelicula WHERE ID= @id",
  ///// ACTORES ////
  anadirActores:
    "INSERT INTO Actores (NombreActores, FechaNacimiento, SexoActores, FotoActores) VALUES (@NombreActores, @FechaNacimiento, @SexoActores, @FotoActores)",
  actualizarActores:
    "UPDATE Actores SET NombreActores= @NombreActores, FechaNacimiento= @FechaNacimiento, SexoActores= @SexoActores, FotoActores= @FotoActores WHERE IdActores= @IdActores",
  eliminarActores: "DELETE FROM Actores WHERE IdActores= @IdActores",
};
