const router = require("express").Router();
const authController = require("../controllers/auth.controller");
const membreController = require("../controllers/membre.controller");
const productionScientifique = require("../controllers/membre.productionScientifique");
const uploadMiddleware = require('../middleware/upload.middleware');
const uploadController = require('../controllers/upload.controller');
const adminevent = require('../controllers/admin.event')



//auth
router.post("/register", authController.register);
router.post("/login", authController.login);
router.get("/logout",authController.logout);


//productionScientifique
router.post("/article", productionScientifique.article);
router.post("/scientificPublication", productionScientifique.scientificPublication);//Ouvrages Scientifique
router.post("/chapter", productionScientifique.chapter);
// router.post("/brevet", productionScientifique.brevet);


router.post("/brevet", uploadMiddleware.upload.single('file'), productionScientifique.brevet);


router.post("/master", productionScientifique.master);
router.post("/thesis", productionScientifique.thesis);
router.post("/habilitation", productionScientifique.habilitation);


//route pour les elements des evenements

router.post("/projet",adminevent.projet);
router.post("/convension",adminevent.convension);
router.post("/manifestation",adminevent.manifestation);

//route pour recuperer les donnees des evenements

router.get("/allprojets",adminevent.getAllProjets);
router.get("/allconvensions",adminevent.getAllConvensions);
router.get("/allmanifestations",adminevent.getAllManifestations);



//recuperation des données
router.get("/allproductions", productionScientifique.getAllProductions);
router.get("/allArticles", productionScientifique.getAllArticles);
router.get("/allBrevets", productionScientifique.getAllBrevets);
router.get("/allChapters", productionScientifique.getAllArticles);
router.get("/allThesis", productionScientifique.getAllThesis);
router.get("/allMasters", productionScientifique.getAllMasters);





//Suppression de production scientifique
router.delete("/delete/production/:id", productionScientifique.deleteProductionScientifique);
//Modification de Production Scientifique
router.put("/update/production/:id",uploadMiddleware.upload.single('file'), productionScientifique.updateProductionScientifique);







//UserSpecifique
router.get("/userArticles/:id", productionScientifique.getUserArticles);
router.get("/userChapters/:id", productionScientifique.getUserChapters);
router.get("/userBrevets/:id", productionScientifique.getUserBrevets);
router.get("/userThesis/:id", productionScientifique.getUserThesis);
router.get("/userMasters/:id", productionScientifique.getUserMasters);
router.get("/userOuvrages/:id", productionScientifique.getUserOuvrages);
router.get("/userHabilitations/:id", productionScientifique.getUserHabilitations);


// Pour gerer le techargement de l'image et fichier
router.post("/upload/profile-image/:id", uploadMiddleware.upload.single('profileImage'), uploadController.uploadProfil);
router.post("/uploadfiles/:id", uploadMiddleware.upload.single('file'), uploadController.uploadFile);
router.get("/getfiles/:id", uploadMiddleware.upload.single('file'), uploadController.getFile);






//membre display : 'block'
router.get("/", membreController.getAllUsers);
router.get('/userInfo/:id',membreController.userInfo);
router.put('/update/:id',membreController.updateUser);
router.delete('/:id',membreController.deleteUser);
router.get('/adminInfo/:id',membreController.adminInfo);



//Pour l'admin doit donner l'accer au membre ou le retirer
router.put('/approve/:id',membreController.isAdminApproved);
router.put('/unapprove/:id',membreController.isAdminAnapproved);




module.exports = router;
