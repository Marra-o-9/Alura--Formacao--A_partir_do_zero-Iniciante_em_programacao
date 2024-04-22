// No documento, selecionar o h1
// let titulo = document.querySelector("h1");
// Dentro do HTML, colocar o texto dentro de h1
// titulo.innerHTML = "Jogo do número secreto";

// let paragrafo = document.querySelector("p");
// paragrafo.innerHTML = "Escolha um número entre 1 e 10:";

let listaNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumero();
let tentativas = 1;

function exibirTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    // Biblioteca adicionada para ler texto, com voz em português
    responsiveVoice.speak(texto, "Brazillian Portuguese Female", {rate:1.2});
}

function mensagemInicial() {
    exibirTexto("h1", "Jogo do número secreto");
    exibirTexto("p", "Escolha um número entre 1 e 10:");
}
mensagemInicial()

// Fazer função onde está o button onclick no código HTML
function verificarChute() {
    // .value busca somente o valor inputado pelo usuário no HTML
    let chute = document.querySelector("input").value;
    if (chute == numeroSecreto) {
        exibirTexto("h1", "Acertou!");
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTexto("p", mensagemTentativas);
        // Pegar o elemento pelo ID único dentro do HTML e remover o atributo disabled (habilitando o botão Novo jogo)
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else if (chute > numeroSecreto) {
        exibirTexto("p", "O número secreto é menor.");
    } else {
        exibirTexto("p", "O número secreto é maior.");
    }
    tentativas++;
    limparCampo();
}

function gerarNumero() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeElementos = listaNumerosSorteados.length;

    if (quantidadeElementos == numeroLimite) {
        listaNumerosSorteados = [];
    }

    if (listaNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumero();
    } else {
        // .push == .append no python
        listaNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector("input");
    chute.value = "";
}

function novoJogo() {
    numeroSecreto = gerarNumero();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}