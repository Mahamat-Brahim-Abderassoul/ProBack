const productionScientifiqueModele = require("../models/user.productionScientifique");
const ObjectID = require("mongoose").Types.ObjectId;
const fs = require('fs');
const path = require('path');
// Pour gerer les erreurs
const {
  brevetErrors,
  articleErrors,
  ouvrageErrors,
  theseErrors,
  masterErrors,
  chapterErrors,
  habilitationErrors,
  titleErrors,
} = require("../utils/errors.utils");

module.exports.article = async (req, res) => {
  const {
    type,
    user_email,
    user_id,
    year,
    title,
    linkDOI,
    file,
    publicationDate,
    authorType,
    cin,
    order,
    journalTitle,
    quartile,
    volume,
    factor,
    indexation,
    journalWebsite,
  } = req.body;

  try {
    const production = await productionScientifiqueModele.create({
      type,
      user_email,
      user_id,
      year,
      title,
      linkDOI,
      file,
      publicationDate,
      authorType,
      cin,
      order,
      journalTitle,
      quartile,
      volume,
      factor,
      indexation,
      journalWebsite,
    });
    res.status(201).json({ type: production.type });
  } catch (err) {
    // console.log(err);
    const errors = titleErrors(err);
    res.status(200).json({ errors });
  }
};
//Ouvrages Scientifiques
module.exports.scientificPublication = async (req, res) => {
  const {
    type,
    year,
    user_email,
    user_id,
    authorType,
    cin,
    order,
    title,
    publisher,
    linkPublisher,
    edition,
    isbnIssn,
    date,
  } = req.body;

  try {
    const production = await productionScientifiqueModele.create({
      type,
      year,
      user_email,
      user_id,
      authorType,
      cin,
      order,
      title,
      publisher,
      linkPublisher,
      edition,
      isbnIssn,
      date,
    });
    res.status(201).json({ type: production.type });
  } catch (err) {
    // console.log(err);
    const errors = titleErrors(err);
    res.status(200).json({ errors });
  }
};

//Chapitres d'ouvrages
module.exports.chapter = async (req, res) => {
  const {
    type,
    year,
    user_email,
    user_id,
    authorType,
    cin,
    order,
    title,
    publisher,
    linkPublisher,
    edition,
    isbnIssn,
    date,
  } = req.body;

  try {
    const production = await productionScientifiqueModele.create({
      type,
      year,
      user_email,
      user_id,
      authorType,
      cin,
      order,
      title,
      publisher,
      linkPublisher,
      edition,
      isbnIssn,
      date,
    });
    res.status(201).json({ type: production.authorType });
  } catch (err) {
    // console.log(err);
    // console.log(err);
    const errors = titleErrors(err);
    res.status(200).json({ errors });
  }
};




















// app.post("/upload-files", upload.single("file"), async (req, res) => {
//   console.log(req.file);
//   const title = req.body.title;
//   const fileName = req.file.filename;
//   try {
//     await PdfSchema.create({ title: title, pdf: fileName });
//     res.send({ status: "ok" });
//   } catch (error) {
//     res.json({ status: error });
//   }
// });

















// // Brevet
// module.exports.brevet = async (req, res) => {
//   const {
//     type,
//     user,
//     title,
//     year,
//     user_email,
//     user_id,
//     reference,
//     file,
//     creationDate,
//     type_,
//   } = req.body;

//   try {
//     const production = await productionScientifiqueModele.create({
//       type,
//       user,
//       title,
//       year,
//       user_email,
//       user_id,
//       reference,
//       file,
//       creationDate,
//       type_,
//     });
//     res.status(201).json({ type: production.type });
//   } catch (err) {
//     // console.log(err);
    // const errors = titleErrors(err);
    // res.status(200).json({ errors });
//   }
// };

module.exports.brevet = async (req, res) => {
  // Utilisez multer pour extraire le fichier du corps de la requête
  const file = req.file;
  console.log("Fichiers reçus :", req.file);
  const {
     type,
     title,
     year,
     user_email,
     user_id,
     reference,
     creationDate,
     type_,
  } = req.body;
 
  try {
     // Créez un nouvel objet avec les données du formulaire et le chemin du fichier
     const productionData = {
       type,
       title,
       year,
       user_email,
       user_id,
       reference,
       file: file.path, // Utilisez le chemin du fichier uploadé
       creationDate,
       type_,
     };
 
     const production = await productionScientifiqueModele.create(productionData);
     res.status(201).json({ type: production.type });
  } catch (err) {
    // console.log(err)
    const errors = titleErrors(err);
    res.status(200).json({ errors });
  }
 };
 












// // Brevet
// module.exports.brevet = async (req, res) => {
//   const {
//     type,
//     user,
//     title,
//     year,
//     user_email,
//     user_id,
//     reference,
//     file,
//     creationDate,
//     type_,
//   } = req.body;

//   try {
//     const production = await productionScientifiqueModele.create({
//       type,
//       user,
//       title,
//       year,
//       user_email,
//       user_id,
//       reference,
//       file,
//       creationDate,
//       type_,
//     });
//     res.status(201).json({ type: production.type });
//   } catch (err) {
//     // console.log(err);
//     const errors = titleErrors(err);
//     res.status(200).json({ errors });
//   }
// };

// Brevet
module.exports.thesis = async (req, res) => {
  const {
    type,
    user_email,
    user_id,
    title,
    year,
    yearOfFirstRegistration,
    subject,
    cotutelle,
    supervisor,
    codeStructure,
    file,
  } = req.body;

  try {
    const production = await productionScientifiqueModele.create({
      type,
      user_email,
      user_id,
      title,
      year,
      yearOfFirstRegistration,
      subject,
      cotutelle,
      supervisor,
      codeStructure,
      file,
    });
    res.status(201).json({ type: production.type });
  } catch (err) {
    // console.log(err);
    const errors = titleErrors(err);
    res.status(200).json({ errors });
  }
};

//Master

module.exports.master = async (req, res) => {
  const {
    type,
    title,
    user_email,
    user_id,
    year,
    firstNameLastName,
    yearOfFirstRegistration,
    file,
    subject,
    supervisor,
  } = req.body;

  try {
    const production = await productionScientifiqueModele.create({
      type,
      title,
      user_email,
      user_id,
      year,
      firstNameLastName,
      yearOfFirstRegistration,
      file,
      subject,
      supervisor,
    });
    res.status(201).json({ type: production.type });
  } catch (err) {
    // console.log(err);
    const errors = titleErrors(err);
    res.status(200).json({ errors });
  }
};
//Habilitation

module.exports.habilitation = async (req, res) => {
  const {
    type,
    user_email,
    user_id,
    year,
    title,
    titulaire,
    file,
    date,
  } = req.body;

  try {
    const production = await productionScientifiqueModele.create({
      type,
      user_email,
      user_id,
      year,
      title,
      titulaire,
      file,
      date,
    });
    res.status(201).json({ type: production.type });
  } catch (err) {
    // console.log(err);
    const errors = titleErrors(err);
    res.status(200).json({ errors });
  }
};

//Recuperation des productions Scirntifique

module.exports.getAllProductions = async (req, res) => {
  try {
    const productions = await productionScientifiqueModele.find();
    res.status(200).json(productions);
  } catch (err) {
    // console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports.getAllArticles = async (req, res) => {
  try {
    const articles = await productionScientifiqueModele.find({
      type: "article",
    });
    res.status(200).json(articles);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports.getAllBrevets = async (req, res) => {
  try {
    const brevets = await productionScientifiqueModele.find({ type: "brevet" });
    res.status(200).json(brevets);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports.getAllChapters = async (req, res) => {
  try {
    const chapters = await productionScientifiqueModele.find({
      type: "chapter",
    });
    res.status(200).json(chapters);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports.getAllMasters = async (req, res) => {
  try {
    const masters = await productionScientifiqueModele.find({ type: "master" });
    res.status(200).json(masters);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports.getAllThesis = async (req, res) => {
  try {
    const thesis = await productionScientifiqueModele.find({ type: "these" });
    res.status(200).json(thesis);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Fonction de contrôleur pour récupérer les articles d'un utilisateur spécifique
module.exports.getUserChapters = async (req, res) => {
  const email = req.params.id;
  try {
    const chapters = await productionScientifiqueModele.find({
      type: "chapter",
      user_email: email,
    });
    if (chapters.length === 0) {
      throw "chapterIsEmpty";
    }
    res.status(200).json(chapters);
  } catch (err) {
    const errors = chapterErrors(err);
    res.status(200).json({ errors });
  }
};

// Fonction pour récupérer les articles d'un utilisateur spécifique
module.exports.getUserArticles = async (req, res) => {
  const email = req.params.id;

  try {
    const articles = await productionScientifiqueModele.find({
      type: "article",
      user_email: email,
    });
    if (articles.length === 0) {
      throw "articleIsEmpty";
    }
    res.status(200).json(articles);
  } catch (err) {
    const errors = articleErrors(err);
    res.status(200).json({ errors });
  }
};

module.exports.getUserBrevets = async (req, res) => {
  const email = req.params.id;

  try {
    const brevets = await productionScientifiqueModele.find({
      type: "brevet",
      user_email: email,
    });
    if (brevets.length === 0) {
      throw "brevetIsEmpty";
    }
    res.status(200).json(brevets);
  } catch (err) {
    const errors = brevetErrors(err);
    res.status(200).json({ errors });
  }
};

// Fonction pour récupérer les ouvrages d'un utilisateur spécifique
module.exports.getUserOuvrages = async (req, res) => {
  const email = req.params.id;

  try {
    const ouvrages = await productionScientifiqueModele.find({
      type: "ouvrage",
      user_email: email,
    });
    if (ouvrages.length === 0) {
      throw "ouvrageIsEmpty";
    }
    res.status(200).json(ouvrages);
  } catch (err) {
    const errors = ouvrageErrors(err);
    res.status(200).json({ errors });
  }
};
module.exports.getUserThesis = async (req, res) => {
  const email = req.params.id;

  try {
    const thesis = await productionScientifiqueModele.find({
      type: "these",
      user_email: email,
    });
    if (thesis.length === 0) {
      throw "theseIsEmpty";
    }
    res.status(200).json(thesis);
  } catch (err) {
    const errors = theseErrors(err);
    res.status(200).json({ errors });
  }
};
module.exports.getUserMasters = async (req, res) => {
  const email = req.params.id;

  try {
    const masters = await productionScientifiqueModele.find({
      type: "master",
      user_email: email,
    });
    if (masters.length === 0) {
      throw "masterIsEmpty";
    }
    res.status(200).json(masters);
  } catch (err) {
    const errors = masterErrors(err);
    res.status(200).json({ errors });
  }
};
module.exports.getUserHabilitations = async (req, res) => {
  const email = req.params.id;

  try {
    const habilitations = await productionScientifiqueModele.find({
      type: "habilitation",
      user_email: email,
    });
    if (habilitations.length === 0) {
      throw "habilitationIsEmpty";
    }
    res.status(200).json(habilitations);
  } catch (err) {
    const errors = habilitationErrors(err);
    res.status(200).json({ errors });
  }
};

//Sppression de de production Scientifique
module.exports.deleteProductionScientifique = async (req, res) => {
  if (!ObjectID.isValid(req.params.id)) {
    return res.status(400).send("ID unknown : " + req.params.id);
  }

  try {
    await productionScientifiqueModele.deleteOne({ _id: req.params.id }).exec();
    res.status(200).json({ message: "Successfully deleted. " });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to delete." });
  }
};

// Modification de production Scientifique
// module.exports.updateProductionScientifique = async (req, res) => {
//   if (!ObjectID.isValid(req.params.id)) {
//     return res.status(400).send("ID unknown : " + req.params.id);
//   }

//   try {
//     await productionScientifiqueModele.updateOne({ _id: req.params.id }).exec();
//     res.status(200).json({ message: "Successfully update. " });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ message: "Failed to delete." });
//   }
// };








// const fs = require('fs');
// const path = require('path');
// const ObjectID = require('mongodb').ObjectID; // Assurez-vous d'importer ObjectID si vous utilisez MongoDB

// const fs = require('fs').promises; // Assurez-vous d'importer fs.promises pour une meilleure gestion des promesses


// Assurez-vous d'importer ObjectID si vous utilisez MongoDB

module.exports.updateProductionScientifique = async (req, res) => {
 if (!ObjectID.isValid(req.params.id)) {
     return res.status(400).send("ID unknown : " + req.params.id);
 }
 
 try {
     console.log("Fichier reçu :", req.file);
 
     if (req.file) {
       const newFile = req.file;
       const production = await productionScientifiqueModele.findById(req.params.id);
       // Ajustez le chemin de l'ancien fichier si nécessaire
       const oldFilePath = path.join(__dirname, '..', 'public', 'images', production.file);
 
       console.log("Chemin de l'ancien fichier :", oldFilePath);
       if (fs.existsSync(oldFilePath)) {
         try {
           await fs.unlink(oldFilePath);
         } catch (err) {
           console.error("Erreur lors de la suppression de l'ancien fichier :", err);
           return res.status(500).send(err);
         }
       }
 
       // Le chemin du nouveau fichier est déjà construit en utilisant le chemin relatif au répertoire courant
       const newFilePath = newFile.path;
 
       fs.rename(newFile.path, newFilePath, async (err) => {
         if (err) {
           console.error("Erreur lors du déplacement du fichier :", err);
           return res.status(500).send(err);
         }
 
         req.body.file = path.join('public', 'images', newFile.filename);
         console.log("Nouveau chemin du fichier :", req.body.file);
 
         const updateProduction = await productionScientifiqueModele.findOneAndUpdate(
           { _id: req.params.id },
           { $set: req.body },
           { new: true, upsert: true, setDefaultsOnInsert: true }
         );
 
         if (updateProduction.file) {
           updateProduction.file = path.join('public', 'images', updateProduction.file);
         }
 
         return res.send(updateProduction);
       });
     } else {
       const updateProduction = await productionScientifiqueModele.findOneAndUpdate(
         { _id: req.params.id },
         { $set: req.body },
         { new: true, upsert: true, setDefaultsOnInsert: true }
       );
       return res.send(updateProduction);
     }
 } catch (err) {
     console.log(err);
     const errors = titleErrors(err);
     res.status(200).json({ errors });
 }
};





// module.exports.updateProductionScientifique = async (req, res) => {
//  if (!ObjectID.isValid(req.params.id)) {
//      return res.status(400).send("ID unknown : " + req.params.id);
//  }
 
//  try {
//      console.log("Fichier reçu :", req.file);
 
//      if (req.file) {
//        const newFile = req.file;
//        const production = await productionScientifiqueModele.findById(req.params.id);
//        const oldFilePath = path.join(__dirname, '..', 'public', 'images', production.file);
 
//        console.log("Chemin de l'ancien fichier :", oldFilePath);
//        if (fs.existsSync(oldFilePath)) {
//          try {
//            await fs.unlink(oldFilePath);
//          } catch (err) {
//            console.error("Erreur lors de la suppression de l'ancien fichier :", err);
//            return res.status(500).send(err);
//          }
//        }
 
//        const publicImagesPath = path.join(__dirname, '..', 'public', 'images');
//        const newFilePath = path.join(publicImagesPath, newFile.filename);
 
//        fs.rename(newFile.path, newFilePath, async (err) => {
//          if (err) {
//            console.error("Erreur lors du déplacement du fichier :", err);
//            return res.status(500).send(err);
//          }
 
//          req.body.file = path.join('public', 'images', newFile.filename);
//          console.log("Nouveau chemin du fichier :", req.body.file);
 
//          const updateProduction = await productionScientifiqueModele.findOneAndUpdate(
//            { _id: req.params.id },
//            { $set: req.body },
//            { new: true, upsert: true, setDefaultsOnInsert: true }
//          );
 
//          if (updateProduction.file) {
//            updateProduction.file = path.join('public', 'images', updateProduction.file);
//          }
 
//          return res.send(updateProduction);
//        });
//      } else {
//        const updateProduction = await productionScientifiqueModele.findOneAndUpdate(
//          { _id: req.params.id },
//          { $set: req.body },
//          { new: true, upsert: true, setDefaultsOnInsert: true }
//        );
//        return res.send(updateProduction);
//      }
//  } catch (err) {
//      console.log(err);
//      const errors = titleErrors(err);
//      res.status(200).json({ errors });
//  }
// };





// module.exports.updateProductionScientifique = async (req, res) => {
//   if (!ObjectID.isValid(req.params.id)) {
//      return res.status(400).send("ID unknown : " + req.params.id);
//   }
 
//   try {
//      console.log("Fichier reçu :", req.file);
 
//      if (req.file) {
//        const newFile = req.file;
//        const production = await productionScientifiqueModele.findById(req.params.id); // Assurez-vous que productionScientifiqueModele est correctement défini
//        const oldFilePath = path.join(__dirname, '..', 'public', 'images', production.file); // Ajustez le chemin si nécessaire
 
//        console.log("Chemin de l'ancien fichier :", oldFilePath);
//        if (fs.existsSync(oldFilePath)) {
//          try {
//            await fs.unlink(oldFilePath);
//          } catch (err) {
//            console.error("Erreur lors de la suppression de l'ancien fichier :", err);
//            return res.status(500).send(err);
//          }
//        }
 
//        // Construire le chemin absolu du répertoire public/images
//        const publicImagesPath = path.join(__dirname, '..', 'public', 'images');
//        const newFilePath = path.join(publicImagesPath, newFile.filename);
 
//        fs.rename(newFile.path, newFilePath, async (err) => {
//          if (err) {
//            console.error("Erreur lors du déplacement du fichier :", err);
//            return res.status(500).send(err);
//          }
 
//          // Assurez-vous que le chemin du fichier est correct avant de mettre à jour
//          req.body.file = path.join('public', 'images', newFile.filename);
//          console.log("Nouveau chemin du fichier :", req.body.file);
 
//          // Mettre à jour le document dans la base de données
//          const updateProduction = await productionScientifiqueModele.findOneAndUpdate(
//            { _id: req.params.id },
//            { $set: req.body },
//            { new: true, upsert: true, setDefaultsOnInsert: true }
//          );
 
//          // Assurez-vous que le chemin du fichier dans la réponse est correct
//          if (updateProduction.file) {
//            updateProduction.file = path.join('public', 'images', updateProduction.file);
//          }
 
//          return res.send(updateProduction);
//        });
//      } else {
//        // Gestion du cas où aucun fichier n'est envoyé
//        const updateProduction = await productionScientifiqueModele.findOneAndUpdate(
//          { _id: req.params.id },
//          { $set: req.body },
//          { new: true, upsert: true, setDefaultsOnInsert: true }
//        );
//        return res.send(updateProduction);
//      }
//   } catch (err) {
//      console.log(err);
//      const errors = titleErrors(err); // Assurez-vous que cette fonction est correctement définie
//      res.status(200).json({ errors });
//   }
//  };
 

// Ajoutez des fonctions similaires pour d'autres types de productions scientifiques si nécessaire


// test
// module.exports.getUserHabilitations = async (req, res) => {
//   // const memberId = req.params.id;
//   try {
//      // Utiliser l'ID du membre pour rechercher les habilitations
//      const habilitations = await productionScientifiqueModele.find({
//        type: "habilitation",
//        user: new mongoose.Types.ObjectId(req.params.id), // Utilisez 'new' pour instancier ObjectId

//      });
 
//      if (habilitations.length === 0) {
//        throw "habilitationIsEmpty";
//      }
//      res.status(200).json(habilitations);
//   } catch (err) {
//     // console.log(err)
//      const errors = habilitationErrors(err);
//      res.status(200).json({ errors });
//   }
//  };
 

// test

// module.exports.test = async (req, res) => {
//   if (!ObjectID.isValid(req.params.id)) {
//     return res.status(400).send("ID unknown : " + req.params.id);
//   }
//   try {
//     const productionWithUser = await productionScientifiqueModele
//       .findById(req.params.id)
//       .populate("user");
//     console.log(productionWithUser);

//     return res.send(productionWithUser);
//   } catch (err) {
//     console.log(err);
//     // const errors = titleErrors(err);
//     // res.status(200).json({ errors });
//   }
// };
