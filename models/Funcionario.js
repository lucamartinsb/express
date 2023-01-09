const db = require('../db')

const Funcionario = db.connection.define('funcionarios', {
    nome: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    cpf: {
        type: db.Sequelize.INTEGER,
        allowNull: false
    },
    telefone: {
        type: db.Sequelize.INTEGER
    }
})

Funcionario.sync()

module.exports = Funcionario