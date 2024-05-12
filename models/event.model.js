const mongoose = require("mongoose"); // Importation de mangoose
const Schema = mongoose.Schema;



// Définition du schéma commun
const eventSchema = new Schema({
    //article
    user: {
      type: Schema.Types.ObjectId,
      ref: 'membre', // Assurez-vous que 'membres' est le nom correct de la collection
    },
    type: { type: String, require: true },
    user_email: { type: String, required: true }, // Utilisation de l'email comme référence
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
  
    publisher: { type: String },
    linkPublisher: { type: String },
    edition: { type: String },
    isbnIssn: { type: String },
    date: { type: Date },
  
    subject: { type: String },
    supervisor: { type: String },
    codeStructure: { type: String },
    cotutelle: { type: String },
    firstNameLastName: { type: String },
    titulaire: { type: String },




    origin: { type: String },
  partner: { type: String },
  summary: { type: String },
  financialImpact: { type: String },
  environmentalImpact: { type: String },
  creationDate: { type: String },
  type_:{type : String}
  });
  
  // Middleware pre-save pour convertir les dates en ISOString
  eventSchema.pre("save", function (next) {
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
  
//   productionScientifiqueSchema.pre("validate", async function (next) {
//     if (this.isNew) { // Vérifie si le document est nouveau
//        const existingDocument = await this.constructor.findOne({ title: this.title });
//        if (existingDocument) {
//          throw new Error("The title must be unique");
//        }
//     }
//     next();
//    });
   
  // Création du modèle pour la collection
  const eventModel = mongoose.model(
    "event",
    eventSchema
  );
  
  module.exports = eventModel;
  