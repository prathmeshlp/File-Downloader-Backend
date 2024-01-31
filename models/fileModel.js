const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
  username: String,
  filename: String,
  code: Number,
});

module.exports = mongoose.model("File", fileSchema);
