const authServices = require("../services/auth.services");

const signIn = async (req, res) => {
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

  const result = await authServices.signIn(req.body);

  if (result.userNotFound) {
    return res.status(400).json({
      message: `User not found with the provided email ${req.body.email}`,
    });
  }

  if (result.passwordMismatch) {
    return res
      .status(400)
      .json({ message: `the provided password is incorrect` });
  }

  res.json({ token: result.token });
};

const signUp = async (req, res) => {
  if (!req.body) {
    return res.status(400).json({ message: `Body cannot be empty!` });
  }

  const { email, password } = req.body;

  const keys = Object.keys(req.body);
  const requiredKey = ["name", "age", "email", "password"];
  const missingKeys = requiredKey.filter((key) => !keys.includes(key));

  if (missingKeys.length > 0) {
    return res.status(400).json({
      message: `Please provide all information: ${missingKeys.join(",")}`,
    });
  }
  if (password.length < 5) {
    return res.status(400).json({
      message: `Password should be more than 5 chars`,
    });
  }

  const result = await authServices.signUp(req.body);

  if (result.userAlreadyExist) {
    return res.status(400).json({
      message: `User with ${email} already exist`,
    });
  }

  res.status(201).json({
    message: `User with ${email} created succesfully`,
  });
};

const signOut = async (req, res) => {
  const authHeader = req.headers.authorization;
  const token = authHeader.split(" ")[1];
  await authServices.signOut(token);

  return res.status(204).json({
    message: `Signout successfully`,
  });
};

module.exports = { signIn, signUp, signOut };
