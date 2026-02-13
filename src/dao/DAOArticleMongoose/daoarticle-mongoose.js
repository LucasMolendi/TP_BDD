const Article = require("./article-model");
const IdaoArticle = require("../IdaoArticle");

class DaoArticleMongoose extends IdaoArticle {
    /**
     * Override explicitement si la methode existe dans le parent
     */
    async insert(article) {
        const newArticle = new Article(article);
        return await newArticle.save();
    };

    async modified(article) {
        const updatedArticle = await Article.findOneAndUpdate(
            { uid: article.uid }, // 1. TROUVER (le filtre)
            {
                $set: {           // 2. MODIFIER (les données)
                    title: article.title,
                    desc: article.desc,
                    auth: article.auth,
                    imgPath: article.imgPath
                }
            },
            { new: true }         // 3. OPTIONS
        );
        return updatedArticle || null;
    }
    async selectAll() {
        return await Article.find();
    };

    async selectById(uidReceived) {
        // On doit passer un OBJET à findOne pour spécifier le nom du champ
        // { uid: "9ed1d218..." }
        const article = await Article.findOne({ uid: uidReceived });
        return article;
    };

    async delete(article) {

        const deletedArticle = await Article.findOneAndDelete(
            {uid: article.uid}
        );

        return deletedArticle || null;
    }
}

module.exports = DaoArticleMongoose;
