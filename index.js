const express = require('express') //retorna uma função que cria o express pra dentro da constante.
const app = express() //constante app recebe a função express, app passa a ser uma instância de express.
const handlebars = require('express-handlebars') //importando o handlebars para Express.
const bodyParser = require('body-parser') //utilitário para receber formulários dentro do Express.

app.engine('handlebars', handlebars.engine({defaultLayout: 'main'})) //configurando o arquivo principal.
app.set('view engine', 'handlebars') //configurando qual será o template engine.

app.use(bodyParser.urlencoded({extended: true})) //formularios submetidos pelo front que chegam ao back no formato urlencoded.
//extended: true significa que dados extraordinários podem ser interpretados.
app.use(bodyParser.json())//json() é uma função dentro do bodyParser e o resultado dessa chamada retorna uma função middle.
//isso signifca que json pode ser interpretado através do body da requisição.

app.post('/add', (req, res) => {
    res.send(`Cliente ${req.body.nome} cadastrado com sucesso!`)
    //Qualquer campo de um formulário pode ser acessado através de seu atributo name!
    //Basta digitar req.body.atributoDoFormulário.
})
app.get('/cadastrar', (req, res) => {
    res.render('formulario')
})

app.listen(3000, () => {
    console.log('Servidor rodando na url http://localhost:3000')
}) // função que escuta na porta passada como parâmetro (ultima linha do código).