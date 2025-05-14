const mongoose = require("mongoose");
const RevokdedTokenSchema = new mongoose.Schema(
  {
    token: String,
  },
  { timestamps: true }
);

const revokdedToken = mongoose.model("revoked-tokens", RevokdedTokenSchema);
module.exports = revokdedToken;
