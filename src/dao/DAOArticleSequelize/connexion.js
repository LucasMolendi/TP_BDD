module.exports = {
    connect_sequelize: () => {
        // Se connecter à la base
        const sequelize = require('./database');

        sequelize.authenticate()
            .then(() => {
                // Log
                console.log('Connexion MySQL OK')
                const Article = require('./article-model');
                sequelize.sync()
                    .then(() => console.log('Tables synchronisées'))
                    .catch(err => console.error(err))
            })
            .catch(err => console.error('Erreur MySQL', err))
    }
}