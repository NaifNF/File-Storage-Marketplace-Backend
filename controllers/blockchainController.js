const asyncHandler = require("express-async-handler");
const Blockchain = require("../models/blockModel");

const addBlockchain = asyncHandler(async (req, res) => {
  const {
    blockchainName,
    blochchainConsensusAlgorithm,
    testNetName,
    testNetId,
  } = req.body;

  const blockChain = await Blockchain.findOne({ blockchainName });

  if (blockChain) {
    res.status(400).json({ message: "blockchain already used" });
  }

  const blockchain = await Blockchain.create({
    blockchainName,
    blochchainConsensusAlgorithm,
    testNetName,
    testNetId,
  });

  if (blockchain) {
    res.status(201).json({
      message: "Blockchain  added successfully",
    });
  } else {
    res.status(401);
    throw new Error("Invalid  Data");
  }
});

module.exports = {
  addBlockchain,
};
