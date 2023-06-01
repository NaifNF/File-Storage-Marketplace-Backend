const mongoose = require("mongoose");

const walletSchema = mongoose.Schema({
  userAddress: {
    type: String,
    required: true,
  },
  userBalance: {
    type: String,
    required: true,
  },
  walletName: {
    type: String,
    default: "metamask",
  },
});

module.exports = mongoose.model("Wallet", walletSchema);
