const article =  require("./article-model");
const IDAOArticles = require("../IDAOArticle");

class DaoarticlesSequelize extends IDAOArticles{
    /**
     * Override explicitement si la methode existe dans le parent
     */
    async insert(article){
        return await article.create(article);
    }

    /**
     * Override explicitement si la methode existe dans le parent
     */
    async selectAll() {
        return await article.findAll();
    }
}

module.exports = DAOArticles-sequelize;