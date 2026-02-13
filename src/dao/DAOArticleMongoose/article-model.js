// Dans article-model.js
const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
    title: String,
    desc: String,
    author: String,
    imgPath: String
});

// C'est ici que Mongoose décide du nom de la collection
// 'Article' deviendra 'articles' dans MongoDB
module.exports = mongoose.model('Article', ArticleSchema);