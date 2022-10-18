const router = require("express").Router();
const controllers = require("../controllers");

router.get("/", controllers.jsonController.getJson);

router.post("/", controllers.jsonController.addJson);

router.get("/:_id", controllers.jsonController.getJsonById);

router.post("/:_id", controllers.jsonController.addJsonById);

router.delete("/:_id", controllers.jsonController.deleteById);
module.exports = router;
