const express = require("express");
const { getPrivateKey, createFile } = require("../controllers/fileController");
const router = express.Router();

router.route("/getPrivateKey").post(getPrivateKey);
router.route("/create").post(createFile);

module.exports = router;
