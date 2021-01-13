const mongoose = require("mongoose");
const User = mongoose.model("User");

module.exports = async () => {
  const user = new User({});
  try {
    await user.save();
  } catch (e) {
    console.log(e);
  }

  return user;
};
