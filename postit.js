document.getElementById('adicionar').addEventListener('click', adicionarLembrentes);
// function adicionarLembrentes() { /* Criei uma função p add lembretes */
//     const novoLembrete = prompt("Digite um lembrete:"); /* O prompt mostra uma caixa de díalogo */
//     if(novoLembrete) { /* add if pra verificar se o usuário digitou algo */
//         const aviso = document.createElement("div");/* essa div será o novo lembrete */
//         aviso.className = "aviso"; /* aplicar estilos já definidos */
//         aviso.innerHTML = `📌${novoLembrete}
//             <button onclick="concluirLembrete(this)">Concluir</button>
//             <button onclick="excluirLembrete(this)">Excluir</button>
//             <button onclick="renomearLembrete(this)">Renomear</button>`;
//         document.querySelector(".container").appendChild(aviso);
//     }
// }

function adicionarLembrentes(novoLembrete) { 
        const aviso = document.createElement("div");
        aviso.className = "aviso " + novoLembrete.cor; 
        aviso.innerHTML = `📌${novoLembrete.texto}
            <button onclick="concluirLembrete(this)">Concluir</button>
            <button onclick="excluirLembrete(this)">Excluir</button>
            <button onclick="renomearLembrete(this)">Renomear</button>`;
        document.querySelector(".container").appendChild(aviso);
    
}

function concluirLembrete(botao) {
    const aviso = botao.parentElement;
    aviso.classList.toggle('concluido');
}

function excluirLembrete(botao) {
    const aviso = botao.parentElement;
    aviso.remove();
}

function renomearLembrete(botao) {
    const aviso = botao.parentElement;
    const novoTexto = prompt("Renomeie o lembrete:", aviso.childNodes[0].textContent.trim());
    if (novoTexto) {
        aviso.childNodes[0].textContent = `📌${novoTexto}`;    
    }
}

const lista_postits = [
    {
    "cor": "azul",
    "texto": "Erro é humano!",
    "aluno": "Mi"
    },
    {
    "cor": "roxo",
    "texto": "teste2!",
    "aluno": "Mi"
    },
    {
    "cor": "azul",
    "texto": "teste3!",
    "aluno": "Mi"
    },
    {
    "cor": "roxo",
    "texto": "teste4!",
    "aluno": "Mi"
    }];

for (let i = 0; i < lista_postits.length; i++){
        let aviso = lista_postits[i];
        adicionarLembrentes(aviso);
}