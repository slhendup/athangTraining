const express = require("express");
const productRoutes = express.Router();

const logger = (req, res, next) => {
  console.log("product routes");
  next();
};
productRoutes.get("/", (req, res) => res.send("get all the products"));
productRoutes.get("/:id", (req, res) =>
  res.send(`get product by id ${req.params.id}`)
);
productRoutes.post("/", (req, res) => res.send("created product"));
productRoutes.put("/:id", (req, res) =>
  res.send(`update product ${req.params.id}`)
);
productRoutes.delete("/:id", (req, res) =>
  res.send(`Delete product ${req.params.id}`)
);
module.exports = productRoutes;
