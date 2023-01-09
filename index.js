const express = require('express') //retorna uma função que cria o express pra dentro da constante.
const app = express() //constante app recebe a função express, app passa a ser uma instância de express.
const handlebars = require('express-handlebars') //importando o handlebars para Express.
const bodyParser = require('body-parser') //utilitário para receber formulários dentro do Express.
const Cliente = require('./models/Cliente')
const Funcionario = require('./models/Funcionario')

app.engine('handlebars', handlebars.engine({defaultLayout: 'main'})) //configurando o arquivo principal.
app.set('view engine', 'handlebars') //configurando qual será o template engine.

app.use(bodyParser.urlencoded({extended: true})) //formularios submetidos pelo front que chegam ao back no formato urlencoded.
//extended: true significa que dados extraordinários podem ser interpretados.
app.use(bodyParser.json())//json() é uma função dentro do bodyParser e o resultado dessa chamada retorna uma função middle.
//isso signifca que json pode ser interpretado através do body da requisição.

app.get('/', (req, res) => {
    Cliente.findAll({order: [['nome', 'ASC']]})
    .then((cliente) => {
        res.render('home', {clientes:cliente})
        //clientes recebe cada cliente e os armazenam dentro de si.
        //clientes deve ser passado no forEach do formulario.
    }).catch((e) => {
        res.send('Algo deu errado!' + e)
    })
})

app.get('/cadastrarCliente', (req, res) => {
    res.render('formularioCliente')
})

app.post('/addCliente', (req, res) => {
    Cliente.create({
        nome: req.body.nome,
        telefone: req.body.telefone,
        veiculo: req.body.veiculo,
        placa: req.body.placa
    }).then(() => {
        res.redirect('/')
    }).catch((error) => {
        res.send('Houve um erro: ' + error)
    })
})

app.get('/delCliente/:id', (req, res) => {
    Cliente.destroy({where: {'id': req.params.id}})
    .then(() => {
        res.send('Cliente deletado com sucesso!')
    }).catch((e) => {
        res.send('Cliente inexistente!' + e)
    })
})


app.get('/cadastrarFuncionario', (req, res) => {
    res.render('formularioFuncionario')
})

app.post('/addFuncionario', (req, res) => {
    Funcionario.create({
        nome: req.body.nome,
        cpf: req.body.cpf,
        telefone: req.body.telefone
    }).then(() => {
        res.redirect('/')
    }).catch((error) => {
        res.send('Houve um erro: ' + error)
    })
})

app.listen(3000, () => {
    console.log('Servidor rodando na url http://localhost:3000')
}) // função que escuta na porta passada como parâmetro (ultima linha do código).