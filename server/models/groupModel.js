const mongoose = require("mongoose");

const groupSchema = new mongoose.Schema(
  {
    creater: { type: mongoose.Types.ObjectId, ref: "user" },
    users: [{ type: mongoose.Types.ObjectId, ref: "user" }],
    name: String,
    avatar: String,
    images: Array,
    desc: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("group", groupSchema);
