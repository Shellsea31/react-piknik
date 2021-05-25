const mongoose = require("mongoose");

const TestSchema = new mongoose.Schema({
  string: {
    type: String,
    trim: true,
    required: "String is required",
  },
  number: {
    type: Number,
    required: true,
  },
});

module.exports = Test = mongoose.model("Test", TestSchema);
