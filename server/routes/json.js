const router = require("express").Router();
const controllers = require("../controllers");

router.get("/", controllers.jsonController.getJson);

router.post("/", controllers.jsonController.addJson);

router.get("/:_id", controllers.jsonController.getJsonById);

module.exports = router;
