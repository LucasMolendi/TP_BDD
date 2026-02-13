const IDAOArticle = require("../idaoarticle");

// Initialisation de la "base de données" fictive
let DB_Articles = [
    {
        id: '1',
        title: 'La gagnante de la Star Ac saison 13 enfin dévoilée',
        desc: 'Ambre, grande gagnante de la saison 13 de la Star Academy, a décidé de choisir Amber Jadah comme nom de scène.',
        author: 'Lucas',
        imgPath: 'https://dogtime.com/wp-content/uploads/sites/12/2011/01/GettyImages-653001154-e1691965000531.jpg'
    },
    {
        id: '2',
        title: 'Alternance : le marché bloqué',
        desc: 'Suite aux décisions de réduction du nombre d’entreprises éligibles aux aides, le marché de l’alternance se retrouve gravement impacté.',
        author: 'Linkedin',
        imgPath: 'https://dogtime.com/wp-content/uploads/sites/12/2011/01/GettyImages-653001154-e1691965000531.jpg'
    },
    {
        id: '3',
        title: 'Un étudiant condamné pour de multiples délits',
        desc: 'Vladimir Vitrou a été condamné pour avoir volé des switchs et des routeurs, mais également pour outrage à la pudeur après avoir imprimé un pénis en 3D sur les imprimantes de l’école, "pour un ami" selon ses dires.',
        author: 'SDVNantes_Actu',
        imgPath: 'https://dogtime.com/wp-content/uploads/sites/12/2011/01/GettyImages-653001154-e1691965000531.jpg'
    }
];

class DAOArticleMock extends IDAOArticle {

    async insert(article) {
        DB_Articles.push(article);
        return article;
    }

    async selectAll() {
        return DB_Articles;
    }

    async selectById(id) {
        // Attention : find renvoie undefined si rien n'est trouvé
        return DB_Articles.find(a => a.id === id);
    }

    async update(id, article) {
        const index = DB_Articles.findIndex(a => a.id === id);
        // Sécurité : on vérifie si l'article existe avant de modifier
        if (index !== -1) {
            DB_Articles[index] = {...article, id}; // On s'assure que l'ID reste le bon
            return DB_Articles[index];
        }
        return null;
    }

    async delete(id) {
        DB_Articles = DB_Articles.filter(a => a.id !== id);
        return true;
    }
}

module.exports = DAOArticleMock;