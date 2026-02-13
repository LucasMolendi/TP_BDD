const IDAOArticle = require("../idaoarticle");
const Article = require("./article-model");

class DAOArticleSequelize extends IDAOArticle {
    /**
     * Override explicitement si la methode existe dans le parent
     */
    async insert(article) {
        // Créer nouvel article dans BDD mySQL
        return await Article.create(article);
    }

    /**
     * Override explicitement si la methode existe dans le parent
     */
    async selectAll() {
        // Selectionne tous les articles
        return await Article.findAll();
    }

    async selectById(id) {
        // Selectionne l'article avec comme id (clé primaire) l'id de l'url
        return await Article.findByPk(id);
    }

    async update(id, article) {
        // mets à jour l'article de l'id avec le contenu "article" - correspond au body et le retourne une fois remplacé
        await Article.update(article, { where: { id } });
        return this.selectById(id);
    }

    async delete(id) {
        // supprime l'article avec l'id en question
        return await Article.destroy({ where: { id } });
    }
}

module.exports = DAOArticleSequelize;