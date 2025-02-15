// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigoSecreto = [];

function agregarAmigo() {
     let nombre = document.getElementById('amigo').value;
     // En caso de que se desee agregar un nombre sin haberse llenado el formulario, el sistema no lo agregara a la lista
     if (nombre === '') {
      document.getElementById('listaAmigos').innerHTML = `Por favor inserta un nombre`;;
     }
     // agragamos el nombre a la lista
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
   if (amigoSecreto.length === 0) {
      document.getElementById('listaAmigos').innerHTML = `No hay amigos para sortear`;
   } else {
      // Sorteamos un amigo aleatoriamente
      let indiceSorteado = Math.floor(Math.random() * amigoSecreto.length);
      let amigoSorteado = amigoSecreto[indiceSorteado];

      // Mostramos el amigo sorteado
      document.getElementById('listaAmigos').innerHTML = `Tu amigo secreto es ${amigoSorteado}`;

      // Eliminamos el amigo sorteado del array
      amigoSecreto.splice(indiceSorteado, 1);
      console.log(amigoSecreto);

      // Si ya no quedan más amigos, mostramos un mensaje final
      if (amigoSecreto.length === 0) {
         document.getElementById('listaAmigos').innerHTML = `Ya todos tienen su amigo secreto`;
         console.log(amigoSecreto);
      }
   }
}
