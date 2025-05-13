const express = require("express");

const bookRoutes = require("./routes/book.route");
const authRoutes = require("./routes/auth.route");
const connectMongoDB = require("./db/mongo.db");

const app = express();
connectMongoDB();
const PORT = 3000;

app.use(express.json());

app.use("/books", bookRoutes);
app.use("/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
