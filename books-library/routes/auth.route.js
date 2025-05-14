const express = require("express");

// const { readFile, writeFile } = require("../utils/file.util");
const verifyAuth = require("../middlewares/veryfyAuth.midddleware");
const authsController = require("../controllers/auth.controller");

const authRoutes = express.Router();

authRoutes.get("/health", (req, res) => {
  res.send(`auth is healthy`);
});

authRoutes.post("/signin", authsController.signIn);

authRoutes.post("/signup", authsController.signUp);

authRoutes.delete("/signout", verifyAuth, authsController.signOut);


module.exports = authRoutes;
