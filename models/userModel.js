const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    trim: true,
    required: "String is required.",
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Enter a valid email"],
  },
  password: {
    type: String,
    trim: true,
    required: true,
    minLength: 8,
  },
  confirmed: {
    type: Boolean,
    default: false,
  },
});

module.exports = User = mongoose.model("User", UserSchema);
