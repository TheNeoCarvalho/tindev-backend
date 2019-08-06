const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const server = express();

mongoose.connect(
  "mongodb+srv://week6:week6@cluster0-pvlax.mongodb.net/tindev?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);

server.use(express.json());
server.use(routes);

server.listen(3333, () => {
  console.log("Server is On");
});
