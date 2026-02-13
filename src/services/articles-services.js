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

    // Correction : On utilise bien 'uid' reçu en paramètre
    updateArticle: async (uid, articleData) => {
        const changedArticle = await DAOFactory.getDAOArticle().update(uid, articleData);
        if (!changedArticle) return makeService(404, "Article introuvable");
        return makeService(200, "Article modifié avec succès", changedArticle);
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

    // Correction : On remplace 'id' par 'uid' pour correspondre à l'argument
    deleteArticle: async (uid) => {
        const deleted = await DAOFactory.getDAOArticle().delete(uid);
        if (!deleted) return makeService(404, "Article introuvable");
        return makeService(200, "Article supprimé avec succès !", deleted);
    }
};