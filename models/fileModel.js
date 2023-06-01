const mongoose = require("mongoose");

const fileSchema = mongoose.Schema({
  hashvalue: {
    type: String,
    required: true,
  },
  privatekey: {
    type: String,
    required: true,
  },
  publicKey: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("File", fileSchema);
