const { DataTypes } = require('sequelize')
const sequelize = require('./database')

const article = sequelize.define('article', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    desc: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    imgPath:{
        type: DataTypes.STRING,
        allowNull: false,
    }
})

module.exports = article