const UserController = {
  user: async function (req, res) {
    const user = { name: "Linh", id: 123 };
    return res.send(user);
  },
};

exports.UserController = UserController;
