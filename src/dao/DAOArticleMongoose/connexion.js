module.exports = {
    connect_mongoose: () => {
        // ----------------------------------------------------------
        // * MongoDB
        // ----------------------------------------------------------
        const mongoose = require('mongoose');

        // Si connexion reussie
        mongoose.connection.once('open', () => {
            console.log(`Connecté(e) à la base de données MongoDB`);
        });

        // si  erreur de DB
        mongoose.connection.on('error', (err) => {
            console.error(`Erreur de la base données : ${err.message}`);
        });
        // Enclencher à la connexion
        mongoose.connect('mongodb://127.0.0.1:27017/articles');
    }
}