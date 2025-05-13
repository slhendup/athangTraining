const express = require("express");

const { createJWTTOKEN } = require("../utils/jwt.util");
const { readFile, writeFile } = require("../utils/file.util");
const verifyAuth= require("../middlewares/veryfyAuth.midddleware")


const authRoutes = express.Router();
const usersFilePath = "./data/users.json";
const revokdedTokensFilePath = "./data/revoked-tokens.json";

authRoutes.get("/health", (req, res) => {
  res.send(`auth is healthy`);
});

authRoutes.post("/signin", async (req, res) => {
  if (!req.body) {
    return res.status(400).json({ message: `Body cannot be empty!` });
  }
  const keys = Object.keys(req.body);
  const requiredKey = ["email", "password"];
  const missingKeys = requiredKey.filter((key) => !keys.includes(key));

  if (missingKeys.length > 0) {
    return res.status(400).json({
      message: `Please provide all information: ${missingKeys.join(", ")}`,
    });
  }
  const allUsers = await readFile(usersFilePath);

  const { email, password } = req.body;

  const user = allUsers.find((item) => item.email === email);

  if (!user) {
    return res.status(400).json({
      message: `User not found with the provided email ${email}`,
    });
  }

  if (user.password !== password) {
    return res
      .status(400)
      .json({ message: `the provided password is incorrect` });
  }
  delete user.password;

  const token = createJWTTOKEN(user);
  res.json({ token });
});

authRoutes.post("/signup", async (req, res) => {
  if (!req.body) {
    return res.status(400).json({ message: `Body cannot be empty!` });
  }
  const keys = Object.keys(req.body);
  const requiredKey = ["name", "age", "email", "password"];
  const missingKeys = requiredKey.filter((key) => !keys.includes(key));

  if (missingKeys.length > 0) {
    return res.status(400).json({
      message: `Please provide all information: ${missingKeys.join(", ")}`,
    });
  }
  const allUsers = await readFile(usersFilePath);
  const { email, password } = req.body; //getting email and password from the body
  const user = allUsers.find((item) => item.email === email);

  if (user) {
    return res.status(400).json({
      message: `User with ${email} already exist`,
    });
  }
  if (password.length < 5) {
    return res.status(400).json({
      message: `Password should be more than 5 chars`,
    });
  }

  allUsers.push(req.body);
  await writeFile(usersFilePath, allUsers);

  res.status(201).json({
    message: `User with ${email} created succesfully`,
  });
});

authRoutes.delete("/signout", verifyAuth, async (req, res) => {
  const authHeader = req.headers.authorization;
  const token = authHeader.split(" ")[1];

  const allRevokedTokens = await readFile(revokdedTokensFilePath);
  allRevokedTokens.push(token);
  await writeFile(revokdedTokensFilePath, allRevokedTokens);

  res.status(204).json({
    message: `Signout successfully`,
  });
});

module.exports = authRoutes;
