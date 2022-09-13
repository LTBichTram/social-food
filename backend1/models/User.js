const mongoose = require("mongoose");
var userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
  },
  avatar: {
    type: String,
    default:
      "https://res.cloudinary.com/hoquanglinh/image/upload/v1653646565/l60Hf_ibprct.png",
  },
  fullname: {
    type: String,
    required: true,
  },
  isActived: {
    type: Boolean,
    default: false,
  },
});
exports.User = mongoose.model("User", userSchema);
