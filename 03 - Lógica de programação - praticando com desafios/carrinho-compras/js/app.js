let total;
limpar();

function adicionar() {

    // Pegar produtos (nome, quantidade e valor)
    let produto = document.getElementById("produto").value;
    let nomeProduto = produto.split(" -")[0];
    let valorUnitario = produto.split("R$")[1];
    let quantidade = document.getElementById("quantidade").value;

    // Calcular preço (subtotal)
    let subtotal = valorUnitario * quantidade;

    // Adicionar produto no carrinho
    let carrinho = document.getElementById("lista-produtos");
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${subtotal}</span>
  </section>`;

    // Atualizar valor total
    total += subtotal;
    let valorTotal = document.getElementById("valor-total");
    valorTotal.innerText = `R$${total}`;
    document.getElementById("quantidade").value = "";

}


function limpar() {
    total = 0;
    document.getElementById("lista-produtos").innerHTML = "";
    document.getElementById("valor-total").innerText = "R$0";
    document.getElementById("quantidade").value = "";
}