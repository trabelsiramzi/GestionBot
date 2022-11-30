const router = require("express").Router();
const controllers = require("../controllers");

router.get("/", controllers.trainingController.runTraining);

module.exports = router;
