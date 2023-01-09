const express = require('express') // retorna uma função que cria o express pra dentro da constante.
const app = express() // constante app recebe a função express, app passa a ser uma instância de express.
const handlebars = require('express-handlebars') // importando o handlebars para express.

app.engine('handlebars', handlebars.engine({defaultLayout: 'main'})) // configurando o arquivo principal.
app.set('view engine', 'handlebars') // configurando qual será o template engine.

app.get('/cadastrar', (req, res) => {
    res.render('formulario')
})

app.listen(3000, () => {
    console.log('Servidor rodando na url http://localhost:3000')
}) // função que escuta na porta passada como parâmetro (ultima linha do código).