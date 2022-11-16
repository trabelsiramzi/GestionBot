const router = require("express").Router();
const controllers = require("../controllers");

router.post("/login", controllers.authController.login);

router.post("/signup", controllers.authController.signup);

router.get("/verifyToken", controllers.authController.verifyToken);

//router.all('*',controllers.authController.isAuthorized)
module.exports = router;
