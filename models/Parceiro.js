const db = require('../db')

const Parceiro = db.connection.define('parceiros', {
    nome: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    cnpj: {
        type: db.Sequelize.INTEGER,
        allowNull: false
    }
})

Parceiro.sync()

module.exports = Parceiro