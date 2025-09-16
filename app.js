//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
console.log("hello");
let participantes = []; // criação do vetor

function manterFoco() { // função para manter o foco no input ativo
  document.getElementById("amigo").focus();
}

function limparInput() {
  document.getElementById("amigo").value = ""; // limpa input
}

function adicionarAmigo() {
  let nome = document.getElementById("amigo").value.trim(); // recebe o nome no input
  const regex = /^[a-zA-Z\s]+$/; // seleção de caracteres permitidos para o input

  if (nome === "") { // verificação de input vazio
    alert("Ops! Este campo não pode ser vazio!");
  } else if (participantes.includes(nome)) { // verificação de nome duplicado
    alert("Ei! Esse nome já foi adicionado!");
  } else if (!regex.test(nome)) { // verifica caracteres não permitidos
    alert('Apenas letras e espaços são permitidos.');
  } else {
    participantes.push(nome); // insere nome no vetor
    document.getElementById("recomecar").removeAttribute('disabled'); // habilita botão de recomeçar
    listarAmigos();
  }
  manterFoco();
  limparInput();
  habilitarSorteio();
}

function listarAmigos() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = ""; // limpa o que houver na lista

  // pega nome no vetor, cria um item para a lista e insere nome na lista
  participantes.forEach((nome, i) => {
    let itemLista = document.createElement("li");
    itemLista.textContent = nome;
    // adiciona "|" se não for o último nome para apresentar o <li> um ao lado do outro (continua no css)
    if (i < participantes.length - 1) {
      itemLista.textContent += " |";
    }
    lista.appendChild(itemLista); // insere item no html
  });
}

function habilitarSorteio() {
  if (participantes.length < 3) { // verifica se há mais de 3 participantes
    document.getElementById("mensagemSorteio").innerHTML = "Sorteio somente a partir de 3 participantes";
  } else {
    document.getElementById("mensagemSorteio").innerHTML = "";
    document.getElementById("habilitarSorteio").removeAttribute('disabled'); // ativa botão sorteio
  }
}
habilitarSorteio();

function sortearAmigo() {
  if (participantes.length === 0) { // verifica se o vetor está vazio
    document.getElementById("sorteado").innerHTML = "Não há participantes para sortear!";
    document.getElementById("habilitarSorteio").setAttribute('disabled', true); // desativa botão sorteio 
    return;
  } else {
    let indice = Math.floor(Math.random() * participantes.length); // sorteia índice aleatório
    let escolhido = participantes[indice]; // pega o nome sorteado
    document.getElementById("sorteado").innerHTML = escolhido; // mostra na tela
    participantes.splice(indice, 1); // remove o nome sorteado do vetor
    listarAmigos();
    manterFoco();
  }
}



function recomecarSorteio() {
  participantes = []; // limpa o vetor
  document.getElementById("listaAmigos").innerHTML = ""; // limpa os nomes dos amigos
  document.getElementById("sorteado").innerHTML = ""; // limpa o nome do sorteado
  document.getElementById("recomecar").setAttribute('disabled', true); // desativa botão de recomecar sorteio
  document.getElementById("habilitarSorteio").setAttribute('disabled', true); // desativa botão sorteio
  manterFoco();
  limparInput();
}