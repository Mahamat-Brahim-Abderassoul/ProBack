const eventModel = require("../models/event.model");
const { projetErrors, manifestationErrors, conventionErrors } = require("../utils/errors.utils");

module.exports.projet = async (req, res) => {
  const { year, code, category, type_, caption, coordinator, budgetShare } = req.body;

  try {
    const eventData = {
      year,
      code,
      category,
      type_,
      caption,
      coordinator, 
      budgetShare,
    };

    const event = await eventModel.create(eventData);
    res.status(201).json({ type: event.type });
  } catch (err) {
    const errors = projetErrors(err);
    res.status(400).json({ errors });
  }
};

module.exports.convension = async (req, res) => {
  const { year, origin, partner, category, type_, summary, financialImpact, environmentalImpact, creationDate } = req.body;
  const file = req.file;

  try {
    const eventData = {
      year,
      origin,
      partner,
      category,
      type_,
      summary,
      financialImpact,
      environmentalImpact,
      creationDate,
      file,
    };

    const event = await eventModel.create(eventData);
    res.status(201).json({ type: event.type });
  } catch (err) {
    const errors = conventionErrors(err); // Correction du nom de la fonction
    res.status(400).json({ errors });
  }
};

module.exports.manifestation = async (req, res) => {
  const { year, title, organizer, dateOfOrganization, location, type_, website } = req.body;

  try {
    const eventData = {
      year,
      title,
      organizer,
      dateOfOrganization,
      location,
      type_,
      website,
    };

    const event = await eventModel.create(eventData);
    res.status(201).json({ type: event.type });
  } catch (err) {
    const errors = manifestationErrors(err);
    res.status(400).json({ errors });
  }
};



module.exports.getAllProjets = async (req, res) => {
  try {
    const projets = await eventModel.find({ type: "projet" });
    res.status(200).json(projets);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
module.exports.getAllConvensions = async (req, res) => {
  try {
    const convensions = await eventModel.find({ type: "convension" });
    res.status(200).json(convensions);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
module.exports.getAllManifestations = async (req, res) => {
  try {
    const manifestations = await eventModel.find({ type: "manifestation" });
    res.status(200).json(manifestations);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};




