//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
console.log("hello");
let participantes = [];

function adicionarAmigo() {
      let nome = document.getElementById("amigo").value;
      
      if (nome === "") { // só adiciona se não for vazio
        alert("Ops! Este campo não pode ser vazio!");
      } else if (participantes.includes(nome)){
        alert("Ei! Esse nome já foi adicionado!");
      } else {
        participantes.push(nome); // coloca no vetor
        document.getElementById("amigo").value = ""; // limpa o input
        document.getElementById("listaAmigos").innerHTML = participantes.join(" | "); // mostra no HTML
        document.getElementById('recomecar').removeAttribute('disabled'); // habilita botão de recomeçar
      }
    }

function sortearAmigo() {
      if (participantes.length === 0) {
        document.getElementById("sorteado").innerHTML = "Não há mais participantes para sortear!"; // se não tiver mais nomes 
        return;
      } else {
        let indice = Math.floor(Math.random() * participantes.length); // sorteia índice aleatório
        let escolhido = participantes[indice]; // pega o nome sorteado
        document.getElementById("sorteado").innerHTML = escolhido; // mostra na tela
        participantes.splice(indice, 1); // remove o nome sorteado do vetor
        document.getElementById("listaAmigos").innerHTML = participantes.join(" | "); // atualiza a lista exibida
      }
    }

function recomecarSorteio() {
    participantes = []; // limpa o vetor
    document.getElementById("amigo").value = ""; // limpa o input
    document.getElementById("listaAmigos").innerHTML = ""; // limpa os nomes dos amigos
    document.getElementById("sorteado").innerHTML = ""; // limpa o nome do sorteado
    document.getElementById('recomecar').setAttribute('disabled', true); // ativa o botão de recomecar sorteio
}