const { DataTypes } = require("sequelize");
const sequelize = require("./database");

const Article = sequelize.define("Article", {
    uid: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false // C'est ici que Sequelize lève l'erreur si le champ est vide
    },
    // CORRECTION : "desc" au lieu de "descr" pour matcher Mongo et ton Service
    desc: {
        type: DataTypes.STRING,
        allowNull: true
    },
    // CORRECTION : "auth" au lieu de "author" pour matcher ton Service
    auth: {
        type: DataTypes.STRING,
        allowNull: true
    },
    imgPath: {
        type: DataTypes.STRING,
        allowNull: true
    }
});

module.exports = Article;