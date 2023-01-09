const Sequelize = require('sequelize') // Importando o módulo sequelize.

const connection = new Sequelize('cadastro', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
}) /* Instancia do Sequelize passando como parametros do construtor o database, 
o username, o password e o objeto que conterá o host(máquina) e qual o conector do banco. */

module.exports = {Sequelize, connection}