const UserModel = require('../models/user.model');
const ObjectID = require("mongoose").Types.ObjectId;
const productionScientifiqueModele = require("../models/user.productionScientifique");



module.exports.uploadProfil = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);
  
  try {
    const imagePath = req.file.path;// Récupère le chemin de l'image téléchargée

    const user = await UserModel.findById(req.params.id); 
    user.profileImage = imagePath;// Met à jour le chemin de l'image de profil de l'utilisateur
    await user.save();

    res.status(200).json({ imagePath });
  } catch (err) {
    console.log(err);
    // res.status(500).json({ message: "Internal server error" });
  }
  
};

module.exports.uploadFile = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);
   
  // Vérifie si req.file existe
  if (!req.file) {
     return res.status(400).json({ message: "No file uploaded" });
  }
   
  const filePath = req.file.path;
  try {
     const production = await productionScientifiqueModele.findById(req.params.id); 
     production.file = filePath;
     await production.save();
     res.status(200).json({ filePath });
  } catch (err) {
     console.log(err);
    //  res.status(500).json({ message: "Internal server error" });
  }
 };
 
// module.exports.uploadFile = async (req, res) => {
//   if (!mongoose.isValidObjectId(req.params.id)) {
//     return res.status(400).json({ message: "Invalid ID" });
//   }
  
//   // Récupère le chemin du fichier téléversé
//   const filePath = req.file.path;
//   try {
//     // Recherche le document correspondant à l'ID dans la base de données
//     const production = await productionScientifiqueModele.findById(req.params.id); 
//     // Met à jour le chemin du fichier dans le document
//     production.file = filePath;
//     // Sauvegarde les modifications dans la base de données
//     await production.save();
//     // Renvoie une réponse JSON avec le chemin du fichier
//     res.status(200).json({ filePath });
//   } catch (error) {
//     // En cas d'erreur, affiche l'erreur dans la console
//     console.log(error);
//     // Renvoie une réponse d'erreur avec un code HTTP 500
//     res.status(500).json({ message: "Internal server error" });
//   }
// };



module.exports.getFile = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);
  
  try {
    // Récupérer l'ID du document à partir des paramètres de la requête
    const id = req.params.id;
    // Rechercher le document dans la base de données
    const production = await productionScientifiqueModele.findById(id);
    // Vérifier si le document existe
    if (!production) {
      return res.status(404).json({ message: "Document not found" });
    }
    // Renvoyer le fichier correspondant au client
    res.send(production.file);
  } catch (err) {
    console.log(err);
    // res.status(500).json({ message: "Internal server error" });
  }
  
};
