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

    async update(article) {
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

    async selectById(uidReceived) {
        console.log("Recherche lancée pour UID :", uidReceived);

        const testAny = await Article.findOne({});
        console.log("Exemple d'article en base :", testAny ? testAny.uid : "AUCUN ARTICLE EN BASE !");

        const article = await Article.findOne({ uid: uidReceived });
        console.log("Résultat final :", article ? "TROUVÉ" : "NON TROUVÉ");

        return article;
    };
    async delete(articleOrUid) {
        const targetUid = articleOrUid.uid ? articleOrUid.uid : articleOrUid;

        console.log("Tentative de suppression de l'UID :", targetUid);

        const deletedArticle = await Article.findOneAndDelete({ uid: targetUid });

        return deletedArticle || null;
    }
}

module.exports = DaoArticleMongoose;
