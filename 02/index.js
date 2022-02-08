const express = require("express");
const servidor = express();
const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];
let i = 0

servidor.get('/', (requisicao, resposta) => {
    resposta.send(`É a vez de ${jogadores[i]} jogar!`);
    i++
    if (i == jogadores.length) {
        i = 0;
    }
});

servidor.listen(3000, () => {
    console.log('Servidor Inicializado na Porta 3000')
});
