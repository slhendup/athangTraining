const express = require("express");
const bookRoutes = require("./routes/book.route");
const app = express();

const PORT = 3000;

app.use(express.json());

app.use("/books", bookRoutes);

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
