const mongoose = require("mongoose");
module.exports = {
    connect_mongoose : () => {
        // ----------------------------------------------------------
        // * MongoDB
        // ----------------------------------------------------------
        const mongoose = require('mongoose');

        // Si connexion reussie
        mongoose.connection.once('open', () => {
            console.log(`Connecté(e) à la base de données MongoDB`);
        });

        // Si erreur bdd
        mongoose.connection.on('error', (err) => {
            console.log(`error u are not connected to the database`);
        });

        // Enclencher à la connexion
        mongoose.connect('mongodb://127.0.0.1:27017/articles');
    }
}