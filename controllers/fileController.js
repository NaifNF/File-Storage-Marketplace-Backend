const File = require("../models/fileModel");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ErrorHandler = require("../utils/errorhandler");

// Get Pk by hash
exports.getPrivateKey = catchAsyncErrors(async (req, res, next) => {
  const file = await File.findOne({ hashvalue: req.body.hashvalue });
  const privateKey = await file?.privatekey;
  const publicKey = await file?.publicKey;

  if (!file) {
    res.status(400).json({
      message: "This hash can't be found",
    });
  }

  res.status(200).json({
    sucess: true,
    privateKey,
    publicKey,
  });
});

//Create HashFile
exports.createFile = catchAsyncErrors(async (req, res, next) => {
  const { hashvalue, privatekey, publicKey, name, description } = req.body;
  const file = await File.create({
    hashvalue,
    privatekey,
    publicKey,
    name,
    description,
  });

  res.status(201).json({
    success: true,
    file,
  });
});
