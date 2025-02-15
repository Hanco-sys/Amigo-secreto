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
       actualizarLista();
     return;
     }
};

function limpiarCaja() {
    document.getElementById('amigo').value = '';
}

function actualizarLista() {
      let listaAmigos = document.getElementById('listaAmigos'); // Referencia al <ul> en el HTML
      
      listaAmigos.innerHTML = ''; // Limpiar la lista

      for (let i = 0; i < amigoSecreto.length; i++) {
          listaAmigos.innerHTML += `<li>${amigoSecreto[i]}</li>`;
      }
}

function sortearAmigo() {
   if (amigoSecreto.length == 0) {
      alert('No hay amigos para sortear.');
   }
   else {
      let amigoSorteado = amigoSecreto[Math.floor(Math.random() * amigoSecreto.length)];
      document.getElementById('listaAmigos').innerHTML = `Tu amigo secreto es ${amigoSorteado}`;
   }
}
