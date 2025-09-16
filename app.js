//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
console.log("hello");
let participantes = [];

function adicionarAmigo() {
      let nomes = document.getElementById("amigo").value;
      
      if (nomes !== "") { // só adiciona se não for vazio
        participantes.push(nomes); // coloca no vetor
        document.getElementById("amigo").value = ""; // limpa o input
        document.getElementById("listaAmigos").innerText = participantes.join(", "); // mostra no HTML
      } else {
        alert("Ops! Este campo não pode ser vazio.");
      }
    }

function sortearAmigo() {
      if (participantes.length === 0) {
        document.getElementById("resultado").innerText = "Não há mais participantes para sortear!"; // se não tiver mais nomes 
        return;
      }
      let indice = Math.floor(Math.random() * participantes.length); // sorteia índice aleatório
      let escolhido = participantes[indice]; // pega o nome sorteado
      document.getElementById("resultado").innerText = escolhido; // mostra na tela
      participantes.splice(indice, 1); // remove o nome sorteado do vetor
      document.getElementById("listaAmigos").innerText = participantes.join(", "); // atualiza a lista exibida
    }


function recomecarSorteio() {
    participantes = [];
    document.getElementById("amigo").value = "";
    document.getElementById("listaAmigos").innerText = "";
    document.getElementById("resultado").innerText = "";
}
