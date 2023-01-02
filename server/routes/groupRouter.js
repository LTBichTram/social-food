const router = require("express").Router();
const commentCtrl = require("../controllers/commentCtrl");
const groupCrl = require("../controllers/groupCtrl");
const auth = require("../middleware/auth");

router.get("/groups", groupCrl.getAll);

// router.patch('/comment/:id', auth, commentCtrl.updateComment)

// router.patch('/comment/:id/like', auth, commentCtrl.likeComment)

// router.patch('/comment/:id/unlike', auth, commentCtrl.unLikeComment)

// router.delete('/comment/:id', auth, commentCtrl.deleteComment)

module.exports = router;
