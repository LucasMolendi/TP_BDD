class IDAOArticle {
    // Définition des méthodes à implenter dans les DAO
    async insert(article) {}

    async selectAll() {}

    async selectById(id) {}

    async update(id, article) {}

    async delete(id) {}

}

module.exports = IDAOArticle;