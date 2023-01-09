const db = require('../db')

const Cliente = db.connection.define('clientes', {
    nome: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    telefone: {
        type: db.Sequelize.INTEGER
    },
    veiculo: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    placa: {
        type: db.Sequelize.STRING,
        allowNull: false
    }
}) // O model é basicamente uma referência da sua tabela dentro do sequelize.
// O model é uma forma de criar tabelas sem precisar usar a linguagem mysql.

// Sincronizando os models com banco de dados:
Cliente.sync() 
// execultar o force apenas quando for criar o banco de dados!