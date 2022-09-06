const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const server = http.createServer(app);
const routes = require("./routes");
require("dotenv").config();
const DBConnection = require("./config/db");
const SocketConnection = require("./config/socket");
//connect to database
DBConnection();
//SocketConnection(server);
app.use(cors());
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));
server.listen(5000, () => {
  console.log("server on port 5000");
});
app.get("/", function (req, res) {
  return res.send("Hello food social network api");
});
app.use("/api", routes);
