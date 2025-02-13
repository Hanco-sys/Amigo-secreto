// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigoSecreto = [];

function agregarAmigo() {
     let nombre = document.getElementById('amigo').value;
     if (nombre === '') {
        alert('Por favor, inserte un nombre.');
     }
     else if (amigoSecreto) {
        amigoSecreto.push(nombre);
        limpiarCaja();
     console.log(nombre);
     console.log(amigoSecreto);
     return;
     }
};

function limpiarCaja() {
    document.getElementById('amigo').value = '';
}