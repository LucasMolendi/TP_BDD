const express = require('express')
const router = express.Router()
const ArticleService = require('../services/articles-services');

router.get("/", async (request, response) => {

    const serviceResponse = await ArticleService.getAll();

    return response.json(serviceResponse);
});

router.get("/:id", async (request, response) => {

    const IdParam = await GameService.getAll();

    return response.json(serviceResponse);
});

module.exports = router