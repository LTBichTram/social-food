const router = require("express").Router();
const groupController = require("../controllers/groupController");
const auth = require("../middleware/auth");

router.get("/groups", groupController.getAll);
router.post("/groups/create", groupController.register);

// router.patch('/comment/:id', auth, commentController.updateComment)

// router.patch('/comment/:id/like', auth, commentController.likeComment)

// router.patch('/comment/:id/unlike', auth, commentController.unLikeComment)

// router.delete('/comment/:id', auth, commentController.deleteComment)

module.exports = router;
