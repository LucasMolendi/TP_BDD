# 📝 TP Final : API REST Multi-Base de Données (SQL & NoSQL)

## 🎯 Contexte et Objectifs
Ce projet conclut le module sur les bases de données. L'objectif était de concevoir un Backend capable de gérer la persistance des données sur deux systèmes radicalement différents (Relationnel vs Document) tout en restant transparent pour le Front-end.

* **Backend** : Node.js, Express.js
* **Abstraction** : Pattern DAO (Data Access Object)
* **ORM/ODM** : Sequelize (SQL) & Mongoose (NoSQL)
* **Identifiants** : UUID v4 (pour une cohérence inter-bases)

---

## 📐 Architecture du Projet

Le projet utilise une architecture en couches pour garantir la maintenance et la flexibilité :

1. **Routes** : Définit les points d'entrée de l'API.
2. **Services** : Contient la logique métier (ex: génération d'UUID).
3. **DAO Factory** : Le "cerveau" qui distribue les requêtes au bon moteur de base de données.
4. **DAO (Mongoose / Sequelize)** : L'implémentation technique spécifique à chaque technologie.

---

## 🛠️ Installation et Configuration

### 1. Prérequis
* Node.js installé
* Une instance MongoDB (ou MongoDB Atlas)
* Une base de données SQL (ou SQLite par défaut)

### 2. Clonage du projet
Ouvrez votre terminal et récupérez le code source :
```bash
git clone [URL_DE_TON_DEPOT]
cd [NOM_DU_DOSSIER]
```
### 3. Lancement
Allez dans le dossier
```bash
npm install
npm start
```
***Le front est trouvable [ici](https://github.com/LucasMolendi/Gestion-Article)***