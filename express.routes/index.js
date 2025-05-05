const express = require("express");
const productRoutes = require("./routes/product.route");// importing the route
const orderRoutes = require("./routes/order.route");
const app = express();
const PORT = 3000;
app.use(express.json());
app.use("/products", productRoutes);// import
app.use("/order", orderRoutes);

app.get("/health", (req, res) => {
  res.send("server is running and healthy");
});

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
