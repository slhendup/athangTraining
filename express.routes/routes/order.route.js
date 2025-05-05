const express = require("express");
const orderRoutes = express.Router();

const logger = (req, res, next) => {
  console.log("order routes");
  next();
};
orderRoutes.get("/", (req, res) => res.send("get all the order"));
orderRoutes.get("/:id", (req, res) =>
  res.send(`get order by id ${req.params.id}`)
);
orderRoutes.post("/", (req, res) => res.send("created order"));
orderRoutes.put("/:id", (req, res) =>
  res.send(`update order ${req.params.id}`)
);
orderRoutes.delete("/:id", (req, res) =>
  res.send(`Delete order ${req.params.id}`)
);
module.exports = orderRoutes;
