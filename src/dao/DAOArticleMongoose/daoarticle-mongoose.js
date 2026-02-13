
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
            { uid: article.uid },
            {
                $set: {
                    title: article.title,
                    desc: article.desc,
                    auth: article.auth,
                    imgPath: article.imgPath
                }
            },
            { new: true }
        );

        return updatedArticle || null;
    }

    async selectAll() {
        return await Article.find();
    };

    async delete(article) {

        const deletedArticle = await Article.findOneAndDelete(
            { uid: article.uid }
        );

        return deletedArticle || null;
    }

}

module.exports = DaoArticleMongoose;
