#language: es

@pruebas @navegacion
Característica: Navegación básica
  Como usuario
  Quiero poder navegar por la aplicación web
  Para poder utilizarla

  Este test comprueba las interacciones básicas con una página web como
  - Visitar
  - Escribir en un campo
  - Leer un campo
  - Pulsar un botón

  Escenario: Visitar una página
    Vamos a probar visitar una página

    Dado que estamos en la página "http://localhost"

  Escenario: Escribir en un campo
    Tenemos que poder escribir en un campo y leer su valor con los siguientes pasos:

    Dado que estamos en la página "http://localhost"
    Y podemos ver el campo "campo1"
    Cuando escribimos "hola" en el campo "campo1"
    Entonces el campo "campo1" muestra el valor "hola"

  Escenario: Pulsar un botón
    Tenemos que poder pulsar un botón con los pasos siguientes:

    Dado que estamos en la página "http://localhost"
    Y podemos ver el botón "boton1"
    Cuando pulsamos el botón "boton1"
    Entonces el campo "resultado" muestra el valor "boton pulsado"
