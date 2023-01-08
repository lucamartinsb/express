const express = require('express')
// retorna uma função que cria o express pra dentro da constante.
const app = express()
// constante app recebe a função express, app passa a ser uma instância de express.

app.get('/', (request, response) => {
    response.send("Este foi o ínicio de tudo!")
})
// aqui foi definido a rota incial ou raiz e retorna uma mensagem na página.

app.get('/sobre', (request, response) => {
    response.send("Este é um projeto criado por Luca Martins e ele é feito com Express, que é um framework back-end do Node.js.")
})
// esta é uma rota sobre que traz um resumo do projeto como mensagem na página.

app.listen(3000, () => {
    console.log('Servidor rodando na url http://localhost:3000')
})
// função que escuta na porta passada como parâmetro (ultima linha do código).