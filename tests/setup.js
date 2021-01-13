const mongoose = require("mongoose");
const keys = require("../config/keys");
require("../models/User");

mongoose
  .connect(keys.mongoURI, { useUnifiedTopology: true, useNewUrlParser: true })
  .then((res) => console.log("db connected !"))
  .catch((e) => console.log(e));
