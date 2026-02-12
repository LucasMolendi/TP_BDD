require('dotenv').config()

const express = require('express');

// Initialiser l'application back
const app = express();

// MODE : SEQUELIZE
if (process.env.BDD_MODE === "sequelize") {
    require("./dao/DAOArticleSequelize/connexion").connect_sequelize();
}
// MODE : Mongoose
else if (process.env.BDD_MODE === "mongodb") {
    require("./dao/DAOArticleMongoose/connexion").connect_mongoose();
}

// Injecter route externe
// -- importer
const articles = require('./articles/articles-routes')
// -- injecter dans le serveur
app.use(articles);

// -- importer
const auth = require('./user/user-routes');
// -- injecter dans le serveur
app.use(auth)

// Démarrer le serveur avec le port 3000
app.listen(3000, () => {
    console.log("started on port 3000");
});