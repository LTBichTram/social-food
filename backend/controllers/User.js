const { User } = require("../models/User");
const UserController = {
  createUser: async function (req, res) {},
  user: async function (req, res) {
    const user = { name: "Linh", id: 123 };
    return res.send(user);
  },
  getUsers: async function (req, res) {
    let users = await User.find();
    return res.send(users);
  },
};

exports.UserController = UserController;
