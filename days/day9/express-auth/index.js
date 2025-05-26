const express = require("express");
const app = express();
const PORT = 3000;
app.use(express.json());

const STATUS_CODES = {
  BAD_REQUEST: 400,
  OK: 200,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
};

const users = [
  { name: "Pratap", email: "pratap@.com", password: "123456" },
  { name: "sonam", email: "sonam@.com", password: "12345" },
  { name: "chimi", email: "chime@.com", password: "1234" },
  { name: "tenzin", email: "tenzin@.com", password: "123" },
];
let loggedInUser = null;

const checkLoggedIn = (req, res, next) => {
  if (loggedInUser) {
    return next();
  }
  res
    .status(STATUS_CODES.UNAUTHORIZED)
    .json({ message: "please login to access this route" });
};

app.get("/", (req, res) => {
  res.send("welcome everyone have excess to this");
});

app.get("/protected", checkLoggedIn, (req, res) => {
  res.send(`the current loogedin user is ${JSON.stringify(loggedInUser)}`);
});

app.post("/login", (req, res) => {
  //1 check the body if it is valid
  if (!req.body) {
    return res
      .status(STATUS_CODES.BAD_REQUEST)
      .json({ message: "body is empty! provide email and password" });
  }
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(STATUS_CODES.BAD_REQUEST)
      .json({ message: "privide email and password" });
  }
  // check if the email is present in the users list
  const user = users.find((item) => item.email === email);
  if (!user) {
    return res
      .status(STATUS_CODES.NOT_FOUND)
      .json({ message: `the provided ${email} does not exist` });
  }
  //compare the password
  if (user.password !== password) {
    return res
      .status(STATUS_CODES.BAD_REQUEST)
      .json({ message: `provide correct password` });
  }
  loggedInUser = user;
  res.status(STATUS_CODES.OK).json({ message: `loggin successful` });
});

app.delete("/logout", (req, res) => {
  loggedInUser = null;
  res.status(STATUS_CODES.OK).json({ message: "logout successfull" });
});

app.listen(PORT, () => {
  console.log(` server is running on http://localhost:${PORT}`);
});
