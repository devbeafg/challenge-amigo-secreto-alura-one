//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
console.log("hello");
let participantes = []; // criação do vetor

// espaço para todos os meus botões e elementos
let amigo = document.getElementById("amigo"); // input
let adicionar = document.getElementById("adicionar"); // botão do input
let listaAmigos = document.getElementById("listaAmigos"); // ul para listar amigos
let resultado = document.getElementById("resultado"); // ul para listar sorteados
let mensagem = document.getElementById("mensagemSorteio"); // mensagens durante sorteio
let habilitarOrNot = document.getElementById("habilitarSorteio"); // botão do sortear
let recomecar = document.getElementById("recomecar"); // botão do recomeçar

adicionar.removeAttribute('disabled'); // inicia com botão input ativo 

function manterFoco() { // função para manter o foco no input ativo
  amigo.focus();
}

function limparInput() {
  amigo.value = ""; // limpa input
}

function adicionarAmigo() {
  let nome = amigo.value.trim(); // recebe o nome no input ignorando espaço
  const regex = /^[a-zA-ZáàâãéèêíóòôõúùûüçÇ\s]+$/; // seleção de caracteres permitidos para o input

  if (nome === "") { // verificação de input vazio
    alert("Ops! Este campo não pode ser vazio!");
  } else if (participantes.includes(nome)) { // verificação de nome duplicado
    alert("Ei! Esse nome já foi adicionado!");
  } else if (!regex.test(nome)) { // verifica caracteres não permitidos
    alert('Lamento! Aceito apenas letras e espaços.');
  } else {
    participantes.push(nome); // insere nome no vetor
    recomecar.removeAttribute('disabled'); // habilita botão de recomeçar
    listarAmigos();
  }
  manterFoco();
  limparInput();
  habilitarSorteio();
}

function listarAmigos() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = ""; // limpa o que houver na lista

  // Pega nome no vetor, cria um item para a lista (<li>) e coloca o nome
  participantes.forEach(nome => {
    let itemLista = document.createElement("li");
    itemLista.textContent = nome;
    lista.appendChild(itemLista); // insere o nome no html
  });
}

function habilitarSorteio() {
  if (participantes.length < 3) { // verifica se há mais de 3 participantes
    mensagem.innerHTML = "Sorteio somente a partir de 3 participantes";
  } else {
    mensagem.innerHTML = "";
    habilitarOrNot.removeAttribute('disabled'); // ativa botão sorteio
  }
}
habilitarSorteio();

function sortearAmigo() {
  let sorteio = [...participantes]; // copia vetor

  for (let i = 0; i < sorteio.length; i++) {
    let posicao = Math.floor(Math.random() * sorteio.length); // escolhe nome aleatório
    let troca = sorteio[i];
    sorteio[i] = sorteio[posicao];
    sorteio[posicao] = troca;
  }

  for (let i = 0; i < participantes.length; i++) { // verifica se um participante tirou ele mesmo
    if (participantes[i] === sorteio[i]) {
      return sortearAmigo();
    }
  }

  resultado.innerHTML = ""; // limpa lista de resultado
  for (let i = 0; i < participantes.length; i++) {
    let itemLista = document.createElement("li"); // cria item
    itemLista.textContent = `• ${participantes[i]} presenteia ${sorteio[i]}`; // une nomes do sorteio
    resultado.appendChild(itemLista); //insere item
  }

  mensagem.innerHTML = "Não há mais participantes para sortear!";
  habilitarOrNot.setAttribute('disabled', true); // desativa botao sorteio
  amigo.setAttribute('disabled', true); // desativa input
  adicionar.setAttribute('disabled', true); // desativa botão adicionar nome
}

function recomecarSorteio() {
  participantes = []; // limpa o vetor
  listaAmigos.innerHTML = ""; // limpa os nomes dos amigos
  resultado.innerHTML = ""; // limpa os nomes dos sorteados
  recomecar.setAttribute('disabled', true); // desativa botão de recomecar sorteio
  habilitarOrNot.setAttribute('disabled', true); // desativa botão sorteio
  mensagem.innerHTML = "Sorteio somente a partir de 3 participantes";
  adicionar.removeAttribute('disabled'); // ativa botão adocionar
  amigo.removeAttribute('disabled'); // ativa input
  manterFoco();
  limparInput();
}