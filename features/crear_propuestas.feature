#language: es

@propuestas
Característica: Gestión de propuestas
  Como usuario
  Quiero poder crear propuestas
  Para compartirlas con el resto de usuarios

  Este test comprueba la gestión de propuestas

  Antecedentes:
    Dado que estamos en la página "http://localhost"

  Escenario: Crear una propuesta
    Vamos a crear una propuesta

    Cuando pulsamos el botón "crear-tarea"
    Y escribimos "descripción de la tarea" en el campo "descripcion-tarea"
    Y pulsamos el botón "guardar-tarea"
    Y pulsamos el botón "consultar-tareas"
    Entonces el campo "descripcion-tarea" muestra el valor "descripción de la tarea"
