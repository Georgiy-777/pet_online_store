const {Sequelize} = require('sequelize')

module.exports = new Sequelize(
    'my-store',
    'postgres',
    'root',
    {
        dialect: 'postgres',
        host: 'localhost',
        port: 5432
    }

)