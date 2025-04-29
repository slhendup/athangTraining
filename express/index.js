const express = require("express");
const PORT = 3000;
const app = express();

// app.get("/health", (req, res) => {
//   res.send("server is very   healthy");
// });
let details = [
  { Name: "sonam", Id: 1 },
  { Name: "jigme", Id: 2 },
  { Name: "jaymang", Id: 3 },
  { Name: "tashi", Id: 4 },
  { Name: "tenzin", Id: 5 },
  { Name: "dorji", Id: 6 },
  { Name: "pema", Id: 7 },
]; // /details of all the students
app.get("/details", (req, res) => {
  res.send(details);
});
// /details/Id to get student by Id
app.get("/details/:Id", (req, res) => {
  const Id = Number(req.params.Id);
  res.send(details.find((detail) => detail.Id === Id));
});

app.listen(PORT, () => {
  console.log(` server is running on http://localhost:${PORT}`);
});
