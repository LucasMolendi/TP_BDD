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
        allowNull: false
    },

    desc: {
        type: DataTypes.STRING,
        allowNull: true
    },
    
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