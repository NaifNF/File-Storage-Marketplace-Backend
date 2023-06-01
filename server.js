const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
var path = require("path");
var cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
dotenv.config();

const corsOptions = {
  origin: "*",
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

// app.use(
//   cors({
//     origin: true,
//     methods: ["GET", "PUT", "POST"],
//     allowedHeaders: ["Content-Type", "Authorization", "x-csrf-token"],
//     credentials: true,
//     maxAge: 600,
//     exposedHeaders: ["*", "Authorization"],
//   })
// );

app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json({ limit: "50mb" }));
app.use(cookieParser());
app.use(bodyParser.json());

const user = require("./routes/userRoutes");
const hash = require("./routes/fileRoutes");
const wallet = require("./routes/walletRoutes");
const blockChain = require("./routes/blockchainRoutes");

app.use("/api/user", user);
app.use("/api/hash", hash);
app.use("/api/wallet", wallet);
app.use("/api/blockchain", blockChain);

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://ibrahim:ibrahim@cluster0.fizhtoy.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

connectDB();

const server = app.listen(5000, () =>
  console.log(`Server started on port 5000`)
);
