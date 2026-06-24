const UserSchema = require("../schemas/UserSchema");
const { model } = require("mongoose");

const UserModel = new model("User", UserSchema);

module.exports = UserModel;
