// Este é apenas um teste de um primeiro banco de dados. //

const Sequelize = require('sequelize') // Importando o módulo sequelize.
const connection = new Sequelize('cadastro', 'root', '1234', {
    host: 'localhost',
    dialect: 'mysql'
}) /* Instancia do Sequelize passando como parametros do construtor o database, 
o username, o password e o objeto que conterá o host(máquina) e qual o conector do banco. */

connection.authenticate()
.then(()=> 
    console.log("Conectado com sucesso!"))
.catch((err) => 
    console.log('Falha: ' + err))

/* A função authenticate verifica se a conexão foi estabelecida retornando uma promisse.
Quando sucessida retorna ao then, caso contrário retorna ao catch. Isto é programação assíncrona. */

const Cliente = connection.define('clientes', {
    nome: {
        type: Sequelize.STRING 
    },
    telefone: {
        type: Sequelize.INTEGER
    },
    veiculo: {
        type: Sequelize.STRING
    },
    placa: {
        type: Sequelize.STRING
    }
}) // O model é basicamente uma referência da sua tabela dentro do sequelize.
// O model é uma forma de criar tabelas sem precisar usar a linguagem mysql.

const Parceiro = connection.define('parceiros', {
    nome: {
        type: Sequelize.STRING
    },
    cnpj: {
        type: Sequelize.INTEGER
    }
})

const Funcionario = connection.define('funcionarios', {
    nome: {
        type: Sequelize.STRING
    },
    cpf: {
        type: Sequelize.INTEGER
    },
    telefone: {
        type: Sequelize.INTEGER
    }
})

// Sincronizando os models com banco de dados:
Cliente.sync() 
Parceiro.sync()
Funcionario.sync()