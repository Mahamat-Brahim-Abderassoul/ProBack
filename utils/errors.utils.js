module.exports.registerErrors = (err) => {
  let errors = { email: "", password: "", firstName: "", lastName: "" };
  if (err.message.includes("firstName"))
    errors.firstName = "The first name is required.";

  if (err.message.includes("lastName"))
    errors.lastName = "The last name is required.";

  // Vérifie si l'email est déjà enregistré.
  if (err.code === 11000 && Object.keys(err.keyPattern)[0] === "email") {
    errors.email = "This email is already registered.";
  }

  // Vérifie si l'email est incorrect.
  if (err.message.includes("email") && !errors.email) {
    errors.email = "Invalid email";
  }

  // Vérifie si le mot de passe est trop court.
  if (err.message.includes("password")) {
    errors.password = "The password must be at least 6 characters long";
  }

  return errors;
};

module.exports.loginErrors = (err) => {
  console.log(err);
  let errors = { email: "", password: "", adminProble: "" };
  if (err.message.includes("email")) errors.email = "Veuillez ressayez";
  if (err.message.includes("password")) errors.password = "Incorrect password";
  if (err.message === "User is not approved by admin")
    errors.adminProble = "😒 Impossible de se connecter !";
  return errors;
};

module.exports.brevetErrors = (err) => {
  let errors = { empty: "" };
  if (err.includes("brevetIsEmpty"))
    errors.empty = "Vous n'avez ajouté aucun brevet !";

  return errors;
};

module.exports.articleErrors = (err) => {
  let errors = { articleIsEmpty: "" };
  if (err.includes("articleIsEmpty"))
    errors.articleIsEmpty = "Vous n'avez ajouté aucun article !";
  return errors;
};

module.exports.ouvrageErrors = (err) => {
  let errors = { ouvrageIsEmpty: "" };
  if (err.includes("ouvrageIsEmpty"))
    errors.ouvrageIsEmpty = "Vous n'avez ajouté aucun ouvrage !";
  return errors;
};

module.exports.theseErrors = (err) => {
  let errors = { theseIsEmpty: "" };
  if (err.includes("theseIsEmpty"))
    errors.theseIsEmpty = "Vous n'avez ajouté aucune thèse !";
  return errors;
};

module.exports.masterErrors = (err) => {
  let errors = { masterIsEmpty: "" };
  if (err.includes("masterIsEmpty"))
    errors.masterIsEmpty = "Vous n'avez ajouté aucun mastère !";
  return errors;
};
module.exports.chapterErrors = (err) => {
  let errors = { chapterIsEmpty: "" };
  if (err.includes("chapterIsEmpty"))
    errors.chapterIsEmpty = "Vous n'avez ajouté aucun chapitre d'ouvrage !";
  return errors;
};
module.exports.habilitationErrors = (err) => {
  let errors = { habilitationIsEmpty: "" };
  if (err.includes("habilitationIsEmpty")) 
    errors.habilitationIsEmpty = "Vous n'avez ajouté aucune habilitation !";
  return errors;
};


module.exports.manifestationErrors = (err) => {
  let errors = { manifestationIsEmpty: "" };
  if (err.includes("manifestationIsEmpty")) 
    errors.manifestationIsEmpty = "Vous n'avez ajouté aucune manifestation !";
  return errors;
};

module.exports.convensionErrors = (err) => {
  let errors = { convensionIsEmpty: "" };
  if (err.includes("convensionIsEmpty")) 
    errors.convensionIsEmpty = "Vous n'avez ajouté aucune convension !";
  return errors;
};


module.exports.projetErrors = (err) => {
  let errors = { projetIsEmpty: "" };
  if (err.includes("projetIsEmpty")) 
    errors.projetIsEmpty = "Vous n'avez ajouté aucun projet !";
  return errors;
};

module.exports.titleErrors = (err) => {
  let errors = { uniqueTitle: "" };
  if (err.message.includes("The title must be unique"))
    errors.uniqueTitle = "Existe déjà !";
  if (err.code === 11000 && err.keyPattern.title) {
    errors.uniqueTitle = "Existe déjà !";
  }
  return errors;
};

module.exports.uploadErrors = (err) => {
  let errors = { format: "", maxSize: "" };

  if (err.message.includes("Invalid file type"))
    errors.format = "Format incompatabile";

  if (err.message.includes("File size exceeds limit"))
    errors.maxSize = "Le fichier dépasse 500ko";

  return errors;
};
