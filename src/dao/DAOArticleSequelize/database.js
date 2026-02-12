const { Sequelize } = require('sequelize')
const sequelize = new Sequelize(
    'articles',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
)
module.exports = sequelize