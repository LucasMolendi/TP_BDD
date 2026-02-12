const express = require('express');

// Initialiser l'application back
const app = express();

app.get("/test", async (request, response) => {
    const unObjet = { name: "Biere Nutella" };
    return response.json({ code: "200", message: "Un message", data:  unObjet});
});


// Démarrer le serveur avec le port 3000
app.listen(3000, () => {
    console.log("Le serveur a démarré");
});