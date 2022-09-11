const router = require("express").Router();
const controllers = require("../controllers");

router.get("/", controllers.jsonController.getJson);

//router.post("/", controllers.productController.addProduct);

//router.get("/:_id", controllers.productController.getProductById);

module.exports = router;