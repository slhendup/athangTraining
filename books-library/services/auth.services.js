const { createJWTTOKEN } = require("../utils/jwt.util");
const User = require("../models/user.model");
const RevokedToken = require("../models/revokedToken.model");
const { createHash, compareHash } = require("../utils/hash.util");

const signIn = async (data) => {
  // const allUsers = await readFile(usersFilePath);
  const { email, password } = data;
  const user = await User.findOne({ email: email });
  // const user = allUsers.find((item) => item.email === email);

  if (!user) {
    return { userNotFound: true };
  }

  const isPasswordMatched = await compareHash(password, user.password);

  if (!isPasswordMatched) {
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

  data.password = await createHash(data.password);

  const newUser = new User(data);
  const savedUser = await newUser.save();

  return { user: savedUser };

  // allUsers.push(data);
  // await writeFile(usersFilePath, allUsers);
  // return { user: data };
};

const signOut = async (token) => {
  const newToken = new RevokedToken({ token });
  await newToken.save();
  // const allRevokedTokens = await readFile(revokdedTokensFilePath);
  // allRevokedTokens.push(token);
  // await writeFile(revokdedTokensFilePath, allRevokedTokens);
};

module.exports = { signIn, signUp, signOut };
