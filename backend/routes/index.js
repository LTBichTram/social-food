const { Router } = require("express");
const { AuthController } = require("../controllers/Auth");
const { UserController } = require("../controllers/User");
const router = Router();

//routes for auth
router.post("/signup", AuthController.signUp);

//routes for user
router.get("/user", UserController.user);
router.get("/users", UserController.getUsers);

module.exports = router;
