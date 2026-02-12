const DAOArticleMock = require("./mock/daoarticle-mock");
module.exports = {

    /**
     * Retourne un IDAOArticle
     */
    getDAOArticle : () => {
        // En amont on aura une config qui permet de savoir le quel on active
        // MODE : SEQUELIZE
        if (process.env.BDD_MODE === "sequelize") {
            const DAOArticleSequelize = require("./DAOArticleSequelize/daoarticles-sequelize");
            return new DAOArticleSequelize();
        }
        // MODE : Mongoose
        else if (process.env.BDD_MODE === "mongodb") {
            const DAOGameMongoose = require("./mongoose/daogame-mongoose");
            return new DAOGameMongoose();
        }
        // MODE : Mock
        else if (process.env.BDD_MODE === "mock") {
            const DAOArticleMock = require("./mock/daoarticle-mock");
            return new DAOArticleMock();
        }
        // Fallback
        const DAOGameMock = require("./mock/daoarticle-mock");
        return new DAOGameMock();
    }
}