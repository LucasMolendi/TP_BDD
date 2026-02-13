const DAOArticleMock = require("./mock/daoarticles-mock");
module.exports = {

    /**
     * Retourne un IDAOArticle
     */
    getDAOArticle: () => {
        // MODE : SEQUELIZE
        if (process.env.BDD_MODE === "sequelize") {
            const DAOArticleSequelize = require("./DAOArticleSequelize/daoarticles-sequelize");
            return new DAOArticleSequelize();
        }

        // MODE : Mongoose
        else if (process.env.BDD_MODE === "mongodb") {
            const DAOArticleMongoose = require("./DAOArticleMongoose/daoarticle-mongoose");
            return new DAOArticleMongoose();
        }

        // MODE : Mock
        else if (process.env.BDD_MODE === "mock") {
            const DAOArticleMock = require("./mock/daoarticles-mock");
            return new DAOArticleMock();
        }
        // Fallback
        const DAOArticleMock = require("./mock/daoarticles-mock");
        return new DAOArticleMock();
    }
}