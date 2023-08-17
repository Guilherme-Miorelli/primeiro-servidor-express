//requisitando a biblioteca express
const express = require("express");

const app = express();

//criando uma rota para o servidor
app.get('/home', function(requisicao, resposta){
    resposta.send("Olá.... Esse é o meu primeiro servidor com o express");
});
app.get('/', function(requisicao, resposta){
    resposta.send("Essa é a minha rota principal");
});

//utilizando arrow function e abreviando os parâmetros de requisicao e resposta
app.get('/array', (req, res) => {
    const array = [1, 2, 3, 4, 5];
    res.send(array);
});
//liberando a porta do servidor
app.listen(3000);