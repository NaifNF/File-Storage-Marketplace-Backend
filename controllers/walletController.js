const asyncHandler = require("express-async-handler");
const Wallet = require("../models/walletModel");

const registerWallet = asyncHandler(async (req, res) => {
  const { userAddress, userBalance } = req.body;

  const walletExists = await Wallet.findOne({ userAddress });

  if (walletExists) {
    res.status(400).json({ message: "Wallet already exist" });
  }
  const wallet = await Wallet.create({
    userAddress,
    userBalance,
  });

  if (wallet) {
    res.status(201).json({
      message: "Wallet address added successfully",
    });
  } else {
    res.status(401);
    throw new Error("Invalid wallet Data");
  }
});

module.exports = {
  registerWallet,
};
