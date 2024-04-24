function comprar() {

    let tipoIngresso = document.getElementById("tipo-ingresso");
    let quantidade = parseInt(document.getElementById("qtd").value);

    alert(quantidade)

    if (tipoIngresso.value == "pista") {
        comprarPista(quantidade);
    } else if (tipoIngresso.value == "inferior") {
        comprarInferior(quantidade);
    } else {
        comprarSuperior(quantidade);
    }
}


function comprarPista(qtd) {

    let qtdPista = parseInt(document.getElementById("qtd-pista").textContent);
    
    if (qtd > qtdPista) {
        alert("Quantidade indisponível de ingressos (Pista)!");
    } else {
        alert("Compra realizada com sucesso!");
        qtdPista = qtdPista - qtd;
        document.getElementById("qtd-pista").textContent = qtdPista;
    }
}


function comprarInferior(qtd) {

    let qtdInferior = parseInt(document.getElementById("qtd-inferior").textContent);
    
    if (qtd > qtdInferior) {
        alert("Quantidade indisponível de ingressos (Inferior)!");
    } else {
        alert("Compra realizada com sucesso!");
        qtdInferior = qtdInferior - qtd;
        document.getElementById("qtd-inferior").textContent = qtdInferior;
    }
}


function comprarSuperior(qtd) {

    let qtdSuperior = parseInt(document.getElementById("qtd-superior").textContent);
    
    if (qtd > qtdSuperior) {
        alert("Quantidade indisponível de ingressos (Superior)!");
    } else {
        alert("Compra realizada com sucesso!");
        qtdSuperior = qtdSuperior - qtd;
        document.getElementById("qtd-superior").textContent = qtdSuperior;
    }
}