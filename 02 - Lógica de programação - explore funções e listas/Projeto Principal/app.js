// No documento, selecionar o h1
// let titulo = document.querySelector("h1");
// Dentro do HTML, colocar o texto dentro de h1
// titulo.innerHTML = "Jogo do número secreto";

// let paragrafo = document.querySelector("p");
// paragrafo.innerHTML = "Escolha um número entre 1 e 10:";

let numeroSecreto = gerarNumero();
let tentativas = 1;

function exibirTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTexto("h1", "Jogo do número secreto");
exibirTexto("p", "Escolha um número entre 1 e 10:");

// Fazer função onde está o button onclick no código HTML
function verificarChute() {
    // .value busca somente o valor inputado pelo usuário no HTML
    let chute = document.querySelector("input").value;
    if (chute == numeroSecreto) {
        exibirTexto("h1", "Acertou!");
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTexto("p", mensagemTentativas);
    } else if (chute > numeroSecreto) {
        exibirTexto("p", "O número secreto é menor.");
    } else {
        exibirTexto("p", "O número secreto é maior.");
    }
    tentativas++;
}

function gerarNumero() {
    return parseInt(Math.random() * 10 + 1);
}