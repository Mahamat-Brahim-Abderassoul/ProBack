// const multer = require('multer'); // Import de Multer pour gérer le téléchargement de fichiers
// const path = require('path'); // Import de path pour gérer les chemins de fichiers

// // Configuration de l'emplacement et du nom de fichier pour le stockage des fichiers téléchargés
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'public/images'); // Définit le dossier de destination des fichiers téléchargés
//   },
//   filename: function (req, file, cb) {
//     // Génère un nom de fichier unique en ajoutant le timestamp au nom de fichier d'origine
//     cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
//   }
// });

// // Initialisation de l'instance Multer avec la configuration de stockage
// const upload = multer({ storage: storage });

// module.exports = {
//   upload: upload
// };



// const fs = require('fs');
const path = require('path');
// const ObjectID = require('mongodb').ObjectID; // Assurez-vous d'importer ObjectID si vous utilisez MongoDB
const multer = require('multer');

// Configuration de Multer
const storage = multer.diskStorage({
 destination: function (req, file, cb) {
    cb(null, 'public/images'); // Assurez-vous que ce chemin est correct
 },
 filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
 }
});

const upload = multer({ storage: storage });
module.exports = {
  upload: upload
};