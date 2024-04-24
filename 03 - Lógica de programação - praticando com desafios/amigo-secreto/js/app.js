let listaAmigos;
reiniciar();


function adicionar() {

    let nomeAmigo = document.getElementById("nome-amigo");

    if (listaAmigos.includes(nomeAmigo.value)) {
        alert("Nome já incluso no sorteio!");
    } else if (nomeAmigo.value == "") {
        alert("Nome inválido!");
    } else {
        listaAmigos.push(nomeAmigo.value);
        document.getElementById("lista-amigos").textContent = listaAmigos;
    }

    nomeAmigo.value = "";

}


function sortear() {

    if (listaAmigos.length <= 2) {
        alert("A Lista tem que ter pelo menos 3 participantes para sorteio!")
    } else {

        for (let i = listaAmigos.length; i; i--) {

            const indiceAleatorio = Math.floor(Math.random() * i);
            [listaAmigos[i - 1], listaAmigos[indiceAleatorio]] = [listaAmigos[indiceAleatorio], listaAmigos[i - 1]];

        }

        let listaSorteio = document.getElementById("lista-sorteio");

        for (i = 0; i < listaAmigos.length; i++) {
            
            if (i == listaAmigos.length - 1) {
                listaSorteio.innerHTML = listaSorteio.innerHTML + listaAmigos[i] + " -> " + listaAmigos[0] + "<br/>";
            } else {
                listaSorteio.innerHTML = listaSorteio.innerHTML + listaAmigos[i] + " -> " + listaAmigos[i + 1] + "<br/>";
            }

        }

    }

}


function reiniciar() {

    listaAmigos = [];
    document.getElementById("nome-amigo").textContent = "";
    document.getElementById("lista-amigos").textContent = "";
    document.getElementById("lista-sorteio").textContent = "";

}