//Crear constante para el body//
const body = document.querySelector('body');

// Llamar nuestras constantes principales

const main = document.getElementById('main');
const form = document.getElementById('form');
const seccionPrincipal = document.getElementById('contenido-1');

// Inputs de forma
const sentimiento = document.getElementById('sentimiento');

// Crear un escuchador de eventos para la forma 
form.addEventListener('submit', (e)  => {
  //Evitar accion por defecto de la forma
  e.preventDefault();
});

