const { Router } = require("express");
const { UserController } = require("../controllers/User");
const router = Router();

router.get("/user", UserController.user);

module.exports = router;
