//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let participantes = [];

function adicionarAmigo() {
    let nome = document.getElementById("amigo").value.trim();
    if (nome && !participantes.includes(nome)) {
        participantes.push(nome);
        atualizarLista();
        document.getElementById("amigo").value = "";
    } else {
        alert("Nome inválido ou já adicionado!");
    }
}

function sortearAmigo() {
    if (participantes.length < 2) {
        alert("Adicione pelo menos 2 participantes para o sorteio!");
        return;
    }
    
    let sorteio = [...participantes];
    let resultado = {};
    
    for (let i = 0; i < participantes.length; i++) {
        let sorteadoIndex;
        do {
            sorteadoIndex = Math.floor(Math.random() * sorteio.length);
        } while (sorteio[sorteadoIndex] === participantes[i]);
        
        resultado[participantes[i]] = sorteio[sorteadoIndex];
        sorteio.splice(sorteadoIndex, 1);
    }
    
    exibirResultado(resultado);
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    participantes.forEach(nome => {
        let li = document.createElement("li");
        li.textContent = nome;
        lista.appendChild(li);
    });
}

function exibirResultado(resultado) {
    let resultadoTexto = "<h3 class='section-title'>Resultado do Amigo Secreto:</h3><ul class='result-list'>";
    for (let chave in resultado) {
        resultadoTexto += `<li>${chave} → ${resultado[chave]}</li>`;
    }
    resultadoTexto += "</ul>";
    document.getElementById("resultado").innerHTML = resultadoTexto;
}
