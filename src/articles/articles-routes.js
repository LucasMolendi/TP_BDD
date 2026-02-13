const express = require("express");
const router = express.Router();
const ArticleService = require("../services/articles-services");

/** Route pour récupérer tous les articles */
router.get("/", async (request, response) => {
    /** getAll dans article-service, le même que pour la demo avec game */
    const serviceResponse = await ArticleService.getAll();

    return response.json(serviceResponse);
});

/** Route post pour créer un article */
router.post("/", async (req, res) => {
    const result = await ArticleService.createArticle(req.body);
    res.status(result.code).json(result);
});

/** Route pour récupérer UN article */
router.get("/:id", async (request, response) => {
    const serviceResponse = await ArticleService.getById(request.params.id);

    return response.json(serviceResponse);
});

/** Route pour modifier/remplacer un article */
router.put("/:id", async (request, response) => {
    const serviceResponse = await ArticleService.updateArticle(request.params.id, request.body);

    return response.json(serviceResponse);
});

/** Route pour supprimer un article */
router.delete("/:id", async (request, response) => {
    const serviceResponse = await ArticleService.deleteArticle(request.params.id);

    return response.json(serviceResponse);
});

module.exports = router;