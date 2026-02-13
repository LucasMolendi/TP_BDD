const { DataTypes } = require("sequelize");
const sequelize = require("./database");

const Article = sequelize.define("Article", {
    id: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descr: {
        type: DataTypes.STRING,
        allowNull: true
    },
    author: {
        type: DataTypes.STRING,
        allowNull: true
    },
    imgPath: {
        type: DataTypes.STRING,
        allowNull: true
    }
});

module.exports = Article;
