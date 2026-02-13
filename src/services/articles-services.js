const DAOFactory = require('../dao/dao-factory');
const {makeService} = require('./service-helper');
const {v4: uuidv4} = require('uuid');

module.exports = {
    createArticle: async (articleData) => {
        const generateId = uuidv4();
        let article = {
            uid: generateId, // On utilise uid comme clé unique
            title: articleData.title,
            desc: articleData.desc,
            auth: articleData.auth,
            imgPath: articleData.imgPath
        };

        const newArticle = await DAOFactory.getDAOArticle().insert(article);
        return makeService(201, "Article créé avec succès", newArticle);
    },

    getById: async (uid) => {
        // On demande au DAO de chercher spécifiquement par l'uid (le UUID)
        const article = await DAOFactory.getDAOArticle().selectById(uid);

        if (!article) {
            return makeService(404, "Désolé, cet article n'existe pas !");
        }

        return makeService(200, "Article trouvé !", article);
    },

    getAll: async () => {
        const allArticles = await DAOFactory.getDAOArticle().selectAll();
        return makeService(200, "Articles récupérés avec succès !", allArticles);
    },


    updateArticle: async (uidFromRoute, dataFromBody) => {
        const articleToUpdate = {
            uid: uidFromRoute,
            ...dataFromBody
        };

        const result = await DAOFactory.getDAOArticle().modified(articleToUpdate);

        if (!result) {
            return makeService(404, "Mise à jour impossible : article introuvable.");
        }
        return makeService(200, "Article mis à jour !", result);
    },

    deleteArticle: async (uid) => {
        const deleted = await DAOFactory.getDAOArticle().delete(uid);

        if (!deleted) {
            return makeService(404, "Article introuvable");
        }
        return makeService(200, "Article supprimé avec succès !", deleted);
    }
};