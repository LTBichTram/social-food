const AuthController = {
  signUp: async function (req, res) {
    return res.send("sign up routes");
  },
  login: async function (req, res) {
    return res.send("login route");
  },
};

exports.AuthController = AuthController;
