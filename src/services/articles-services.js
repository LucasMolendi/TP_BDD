const  { logger } = require("../logger");
const { makeService } = require("./service-helper");
const { v4 : uuidv4 }= require('uuid');

// Import DAOFactory pour récupére rnotre dao de manière abstraite
const DAOFactory = require("../dao/dao-factory");

module.exports = {

    // Un fonction du metier
    createArticle : async () => {

        // L'objet jeu a insérer
        const generatedId = uuidv4(); // id générer
        let game = { uid: generatedId, title: "Ambre est officielement la grande gagnante de la star ac 2025" };

        const monNewGame = await DAOFactory.getDAOGame().insert(game);

        // logger.info(`Code: 200 | Message: Jeu crée avec succès`);
        // return { code: "200", message: "Jeu crée avec succès", data: monNewGame };
        return makeService("200", "Jeu crée avec succès", monNewGame);
    },

    getAll : async () => {
        // Select all
        const toutMesArticles = await DAOFactory.getDAOArticle().selectAll();

        return makeService("200", "Tout les jeux ont été récupérés", toutMesArticles);
    },
    getID : async () => {
        //select one
        const toutMesArticles = await DAOFactory.getDAOArticle().selectAll();
    }
}