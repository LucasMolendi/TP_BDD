// Dans article-model.js
const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
    uid: { type: String, required: true, unique: true },
    title: String,
    desc: String,
    auth: String,
    imgPath: String
});
// C'est ici que Mongoose décide du nom de la collection
module.exports = mongoose.model('Article', ArticleSchema);