const Comments = require("../models/commentModel");

const Groups = require("../models/groupModel");
const Posts = require("../models/postModel");

const groupCrl = {
  getAll: async (req, res) => {
    const groups = await Groups.find();
    res.send(groups);
  },
  register: async (req, res) => {
    try {
      const { creater, users, name, avatar, images, desc } = req.body;

      const newGroup = new Groups({
        creater,
        users,
        name,
        avatar,
        images,
        desc,
      });

      await newGroup.save();

      res.json({
        msg: "Success",
        group: {
          ...newGroup._doc,
        },
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = groupCrl;
