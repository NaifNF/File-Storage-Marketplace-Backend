const express = require("express");
const { registerWallet } = require("../controllers/walletController");
const router = express.Router();

router.route("/createWallet").post(registerWallet);

module.exports = router;
