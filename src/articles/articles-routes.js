const express = require("express");
const router = express.Router();
const ArticleService = require("../services/articles-services");

/** Route pour récupérer tous les articles */
router.get("/articles", async (request, response) => {
    /** getAll dans article-service, le même que pour la demo avec game */
    const serviceResponse = await ArticleService.getAll();

    return response.json(serviceResponse);
});

/** Route post pour créer un article */
router.post("/articles", async (req, res) => {
    // Correction ici : ArticleService avec un 'A' majuscule
    const result = await ArticleService.createArticle(req.body);
    res.status(result.code).json(result);
});

/** Route pour récupérer UN article --------------------- ko */
router.get("/articles/:id", async (request, response) => {
    /** getById dans article-service, prend l'id et affiche l'article lié*/
    const serviceResponse = await ArticleService.getById(request.params.id);

    return response.json(serviceResponse);
});

/** Route pour modifier/remplacer un article */
router.put("/articles/:id", async (request, response) => {
    /** updateArticle dans article-service, prend l'id et le body en JSON puis modifie l'article lié à l'id*/
    const serviceResponse = await ArticleService.updateArticle(request.params.id, request.body);

    return response.json(serviceResponse);
});

/** Route pour supprimer un article */
router.delete("/articles/:id", async (request, response) => {
    /** deleteArticle dans article-service, prend l'id et supprime l'article lié*/
    const serviceResponse = await ArticleService.deleteArticle(request.params.id);

    return response.json(serviceResponse);
});

module.exports = router;