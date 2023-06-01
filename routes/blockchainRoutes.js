const express = require("express");
const { addBlockchain } = require("../controllers/blockchainController");
const router = express.Router();

router.route("/add").post(addBlockchain);

module.exports = router;
