const winston = require('winston');

module.exports = {
    // -- configurer le logger
    logger: winston.createLogger({
        // Log que si le niveau est inférieur (c'est-à-dire plus grave) ou égal à cette valeur.
        level: "info",
        // Utilisatioon de timestamp et printf pour créer un fichier au format log
        format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.printf(
                (info) => `${info.timestamp} ${info.level}: ${info.message}`
            )
        ),
        // Mes les logs consoles dans le fichier
        transports: [
            new winston.transports.Console(),
            new winston.transports.File({ filename: "logs/app.log" }),
        ],
    })
}