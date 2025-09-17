<div align="center">
  <img width="70" height="70" alt="image" src="https://github.com/user-attachments/assets/f19ea6b1-02a4-413f-8893-9fc31ce2d6e0" align="center"/>
  <h1>Challenge: Amigo Secreto</h1>
</div>

Repositório do desafio *Amigo Secreto*, desenvolvido durante a formação de programação do grupo G9 no programa Oracle Next Education em parceria com a Alura.
### ☆ Descrição do projeto
Essa aplicação web foi criada para simular o famoso sorteio de amigo secreto de forma simples e intuitiva. O objetivo principal é permitir que o usuário adicione nomes a uma lista, apresente-a e, em seguida, realize um sorteio aleatório, garantindo uma distribuição justa entre todos os participantes.

---

## ★ Deploy
* **Vercel:** [Título](Link)
* **GitHub Pages:** [Título](Link)

---

## ★ Estrutura do projeto
```bash
challenge-amigo-secreto-alura-one/
├── assets/           ← pasta para imagens ou outros recursos visuais
├── index.html        ← página principal
├── app.js            ← lógica de JavaScript
├── style.css         ← estilo da página
└── README.md         ← este documento
```
---

## ★ Funcionalidades
Objetivo: praticar lógica de programação, manipulação de vetores (arrays), condições e interação com DOM em JavaScript.

### ☆ Esse projeto permite
- adicionar nomes de participantes;  
- sortear pares entre eles, de modo que ninguém tire a si mesmo;  
- apresentar o resultado de forma clara;  
- reiniciar o sorteio limpando todos os dados em qualquer momento durante o sorteio.
### ☆ Validações e verificações
1. Os botões **Sortear amigo** e **Recomeçar sorteio** estarão desativados ao iniciar a aplicação.
2. O usuário insere o nome de um participante e clica em **Adicionar**.
   <br/>2.1. ☆ Verificações:
     - se o campo está vazio → alerta que não pode estar vazio;  
     - se o nome já existe → alerta que o nome já foi adicionado;
     - se o usuário digitar caracteres especiais, apenas espaço, símbolos e/ou números → alerta que a entrada não é válida;  
3. Todos os nomes válidos são armazenados em uma lista (array/vetor).
   <br/>3.1. ☆ Verificações:
     - os nomes são aceitos apenas em letras com e sem acentos e espaços.
4. Quando clicar em **Sortear amigo**
   <br/>4.1. ☆ Verificações:
     - O botão **Sortear amigo** só é habilitado quando o usuário insere 3 participantes.
     - Quando o botão **Sortear amigo** clicado, o sistema embaralha os participantes e associa cada um a um outro participante.
     - Um participante não é sorteado para ele mesmo.
5. É possível **Recomeçar sorteio** para limpar todos os participantes, sorteados e recomeçar.
   <br/>5.1. ☆ Verificações:
     - O botão **Recomeçar sorteio** só é habilitado quando o usuário insere 1 participante.
     - Quando o botão **Recomeçar sorteio** clicado, o sistema limpa o vetor e todos os campos de listas, além de desabilitar os botões **Sortear amigo** e **Recomeçar sorteio**, assim, reiniciando o sistema.

---

## ★ Tecnologias utilizadas

- HTML  
- CSS  
- JavaScript puro (sem frameworks)  

---

## ★ Instalação / Uso

1.  **Clone este repositório:**
    ```bash
    git clone https://github.com/devbeafg/challenge-amigo-secreto-alura-one.git
    ```
2.  **Entre na pasta do projeto:**
    ```bash
    cd challenge-amigo-secreto-alura-one
    ```
3.  **Abra o arquivo index.html em um navegador local**
    
    * **Opção 1:** Dê um clique duplo no arquivo 'index.html'.
    * **Opção 2:** User o **Live Server** (extensão do VS Code) para rodar.

---
