// IMPORTING THE EXTERNAL PACKAGES
const express = require("express");
const cors = require("cors");
const serverless = require("serverless-http");

// INITIALIZING THE EXPRESS BASIC FUNCTIONS
const app = express();
const router = express.Router();

// DEFINING SOME RULES FOR THE EXPRESS;
app.use(cors());
app.use("/.netlify/functions/api", router);

// API ROUTES
router.get("/demo", (req, res, next) => {
  res.status(200).json({ response: "hello world" });
});

// EXPRORTING AS A SERVERLESS FUNCTION
module.exports.handler = serverless(app);
