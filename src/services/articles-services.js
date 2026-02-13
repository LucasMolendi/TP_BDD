const DAOFactory = require('../dao/dao-factory');
const { makeService } = require('./service-helper');
const { v4: uuidv4 } = require('uuid');

module.exports = {
    createArticle: async (articleData) => {
        const generateId = uuidv4();
        // Vérifie bien que les clés (title, desc, auth...)
        // sont les mêmes que dans ton Body Postman
        let article = {
            id: generateId,
            title: articleData.title,
            desc: articleData.desc,
            auth: articleData.auth, // <--- Si tu envoies "author" sur Postman, mets .author ici
            imgPath: articleData.imgPath
        };

        const newArticle = await DAOFactory.getDAOArticle().insert(article);
        return makeService(200, "Article créé avec succès", newArticle);
    },

    modifiedArticle: async (id, articleData) => {
        // Correction du "00 et ajout de l'ID
        const changedArticle = await DAOFactory.getDAOArticle().update(id, articleData);
        return makeService(200, "Article modifié avec succès", changedArticle);
    },

    getAll: async () => {
        const allArticles = await DAOFactory.getDAOArticle().selectAll();
        // Utilise bien le nombre 200 (pas de guillemets)
        return makeService(200, "Articles récupérés avec succès !", allArticles);
    },

    delete: async (id) => {
        const deleteArticle = await DAOFactory.getDAOArticle().delete(id);
        return makeService(200, "Article supprimé avec succès !", deleteArticle);
    }
};