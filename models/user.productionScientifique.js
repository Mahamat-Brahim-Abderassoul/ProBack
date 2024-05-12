const mongoose = require("mongoose"); // Importation de mangoose
const Schema = mongoose.Schema;

// Define your schema and model here

// Schéma pour les auteurs
const authorSchema = new Schema({
  order: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  }
});

// Définition du schéma commun
const productionScientifiqueSchema = new Schema({
  //article
  user: {
    type: Schema.Types.ObjectId,
    ref: 'membre', // Assurez-vous que 'membres' est le nom correct de la collection
  },
  type: { type: String, require: true },
  user_email: { type: String, required: true }, // Utilisation de l'email comme référence
  user_id: { type: String, required: true },
  year: { type: Number },
  title: {
    type: String,
    required: true,
    unique: true,
    sparse:true
  },
  // title: { type: String, required: true, unique: true },
  linkDOI: { type: String },
  file: { type: String , default: "fichier.pdf"},
  publicationDate: { type: Date },
  authorType: { type: String },
  cin: { type: String },
  order: { type: Number },
  yearOfFirstRegistration: { type: Number },
  journalTitle: { type: String },
  quartile: { type: String },
  volume: { type: String },
  factor: { type: Number },
  indexation: { type: String },
  journalWebsite: { type: String },

  //Brevet
  // year: { type: Number, required: true },
  reference: { type: String },
  // file: { type: Buffer, required: true },
  creationDate: { type: Date },
  type_: { type: String },

  //Ouvrage
  // year: { type: Number, required: true },
  // authorType: { type: String, required: true },
  // CIN: { type: String, required: true },
  // order: { type: Number, required: true },
  // title:{ type: String, required: true },
  publisher: { type: String },
  linkPublisher: { type: String },
  edition: { type: String },
  isbnIssn: { type: String },
  date: { type: Date },

  //Chaîtres d'ouvrages
  // year: { type: Number, required: true },
  // authorType: { type: String, required: true },
  // CIN: { type: String, required: true },
  // order: { type: Number, required: true },

  //These
  // year: { type: Number, required: true },
  // title:{ type: String, required: true },
  // yearOfFirstRegistration: { type: Number },
  subject: { type: String },
  // authorType:{ type: String, required: true },
  supervisor: { type: String },
  codeStructure: { type: String },
  // file: { type: Buffer, required: true },
  cotutelle: { type: String },

  // master
  // year: { type: Number, required: true },
  firstNameLastName: { type: String },
  // yearOfFirstRegistration: { type: Number, required: true },
  // file: { type: Buffer, required: true },
  // subject:{ type: String, required: true },
  // supervisor:{ type: String, required: true },

  //Habilitation
  titulaire: { type: String },

  // Ajoutez d'autres attributs communs
  // ...
  // Ajoutez des attributs spécifiques à chaque type de document
  authors: {
    type: [authorSchema], // Tableau d'objets auteurs
    required: true
  },
  // ...
});

// Middleware pre-save pour convertir les dates en ISOString
productionScientifiqueSchema.pre("save", function (next) {
  if (this.date instanceof Date) {
    this.date = this.date.toISOString();
  }

  if (this.publicationDate instanceof Date) {
    this.publicationDate = this.publicationDate.toISOString();
  }

  if (this.creationDate instanceof Date) {
    this.creationDate = this.creationDate.toISOString();
  }
  next();
});

// // Méthode statique pour valider l'unicité du titre
// productionScientifiqueSchema.pre("validate", async function (next) {
//   const existingDocument = await this.constructor.findOne({ title: this.title });
//   if (existingDocument) {
//     throw new Error("The title must be unique");
//   }
//   next();
// });

productionScientifiqueSchema.pre("validate", async function (next) {
  if (this.isNew) { // Vérifie si le document est nouveau
     const existingDocument = await this.constructor.findOne({ title: this.title });
     if (existingDocument) {
       throw new Error("The title must be unique");
     }
  }
  next();
 });
 
// Création du modèle pour la collection
const productionScientifiqueModel = mongoose.model(
  "productionScientifique",
  productionScientifiqueSchema
);

module.exports = productionScientifiqueModel;
