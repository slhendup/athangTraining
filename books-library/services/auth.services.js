const { readFile, writeFile } = require("../utils/file.util");
const usersFilePath = "./data/users.json";
const { createJWTTOKEN } = require("../utils/jwt.util");
const revokdedTokensFilePath = "./data/revoked-tokens.json";
const User = require("../models/user.model");

const signIn = async (data) => {
  // const allUsers = await readFile(usersFilePath);
  const { email, password } = data;
  const user = await User.findOne({ email: email });
  // const user = allUsers.find((item) => item.email === email);

  if (!user) {
    return { userNotFound: true };
  }

  if (user.password !== password) {
    return { passwordMismatch: true };
  }

  delete user.password;

  const token = createJWTTOKEN(user.toJSON()); //converting document into json

  return { token };
};

const signUp = async (data) => {
  const { email } = data;
  // const allUsers = await readFile(usersFilePath);
  // const user = allUsers.find((item) => item.email === email);
  const user = await User.findOne({ email: email });
  if (user) {
    return { userAlreadyExist: true };
  }

  const newUser = new User(data);
  const savedUser = await newUser.save();

  return { user: savedUser };

  // allUsers.push(data);
  // await writeFile(usersFilePath, allUsers);
  // return { user: data };
};

const signOut = async (token) => {
  const allRevokedTokens = await readFile(revokdedTokensFilePath);
  allRevokedTokens.push(token);
  await writeFile(revokdedTokensFilePath, allRevokedTokens);
};

module.exports = { signIn, signUp, signOut };
