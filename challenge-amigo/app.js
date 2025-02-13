// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigoSecreto = [];

function amigoSecretoFunction() {
    let listaAmigoSecreto = document.getElementById('amigo').value;
    if (listaAmigoSecreto === '') {
        alert('Por favor, ingrese un nombre');
        return;
    }
    amigoSecreto.push(listaAmigoSecreto);
    console.log(amigoSecreto);
    return amigoSecreto;

};
