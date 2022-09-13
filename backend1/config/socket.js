const socketio = require("socket.io");
const { User } = require("../models/User");
const SocketConnection = (server) => {
  const checkUserExist = (allUsers, userId) => {
    return allUsers.some((user) => user.userId === userId);
  };
  const io = socketio(server, {
    cors: {
      origin: process.env.socketClient,
      methods: ["GET", "POST"],
    },
  });
  var allUsers = [];
  io.on("connect", (socket) => {
    console.log("New user connected:", socket.id);

    socket.on("active", (userId) => {
      allUsers.push({
        socketId: socket.id,
        userId,
      });
      console.log(allUsers);
      User.findOneAndUpdate(
        { _id: userId },
        { isActived: true },
        { new: true },
        function (err, doc) {
          if (err) {
            // console.log(err);
          } else {
            // console.log(doc);
          }
        }
      );
    });
    socket.on("disconnect", async function () {
      //get user disconnected
      const userId = allUsers.find(
        (user) => user.socketId === socket.id
      )?.userId;
      //remove user disconected off array
      allUsers = allUsers.filter((user) => user.socketId !== socket.id);

      console.log(`test test test ${userId}`);
      if (!checkUserExist(allUsers, userId) && userId) {
        console.log("ok");
        //Set isActived user is false
        console.log(userId);
        var user = await User.findByIdAndUpdate(
          userId,
          { isActived: false },
          { new: true }
        );
      }
    });
    socket.emit("hello", { name: "John" });
  });
};
module.exports = SocketConnection;
