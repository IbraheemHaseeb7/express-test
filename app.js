// IMPORTING THE EXTERNAL PACKAGES
const express = require("express");
const cors = require("cors");
const serverless = require("serverless-http");
require("dotenv").config();
const PORT = process.env.PORT;

// INITIALIZING THE EXPRESS BASIC FUNCTIONS
const app = express();
const router = express.Router();

// DEFINING SOME RULES FOR THE EXPRESS
app.use(express.json());
app.use(router);
app.use(cors());
app.use("./netlify/functions/api", router);

// API ROUTES
router.get("/", (req, res, next) => {
  res.status(200).json({ response: "hello world" });
});

// STARTING THE SERVER
app.listen(PORT, () => {
  console.log(`Local host running on ${PORT}`);
});

// EXPRORTING AS A SERVERLESS FUNCTION
module.exports.handler = serverless(app);
