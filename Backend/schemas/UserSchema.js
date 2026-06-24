const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Your username is required"],
    },
    email: {
        type: String,
        required: [true, "Your email is required"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Your password is required"],
    },
});

userSchema.pre("save", async function () {
    console.log("Password:", this.password);
    this.password = await bcrypt.hash(this.password, 10);
});

module.exports = userSchema;
