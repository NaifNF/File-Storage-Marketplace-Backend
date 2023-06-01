const mongoose = require("mongoose");

const blockchainSchema = mongoose.Schema({
  blockchainName: {
    type: String,
    required: true,
  },
  blochchainConsensusAlgorithm: {
    type: String,
    required: true,
  },
  testNetName: {
    type: String,
    required: true,
  },
  testNetId: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Blockchain", blockchainSchema);
