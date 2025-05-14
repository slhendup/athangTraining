const RevokedToken = require("../models/revokedToken.model");
const { readFile } = require("../utils/file.util");
const { verifyJWTToken } = require("../utils/jwt.util");
const revokedTokensFilePath = "./data/revoked-tokens.json";

const verifyAuth = async (req, res, next) => {
  const authheader = req.headers.authorization;
  if (!authheader) {
    return res
      .status(401)
      .json({ message: `please provide authorization header` });
  }

  if (!authheader.startsWith("Bearer ")) {
    return res
      .status(401)
      .json({ message: `Please provide token in valid fromate` });
  }
  const token = authheader.split(" ")[1];
  if (!token || token === "null" || token === "undefined") {
    return res.status(401).json({ message: `Please provide token` });
  }

  const revokedTokens = await RevokedToken.findOne({ token });

  if (revokedTokens) {
    return res.status(401).json({ message: `Token is already revoked` });
  }

  const data = verifyJWTToken(token);
  if (data.error) {
    return res
      .status(401)
      .json({ message: `please provide valid token-${data.message}` });
  }
  req.user = data;
  next();
};
module.exports = verifyAuth;
