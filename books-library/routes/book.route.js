const express = require("express");

// const fs = require("node:fs/promises");
// const { readFile, writeFile } = require("../utils/file.util");
const verifyAuth = require("../middlewares/veryfyAuth.midddleware");

const booksController = require("../controllers/books.controller");
const Book = require("../models/book.model");

const booksRoutes = express.Router();
// const filePath = "./data/books.json";

booksRoutes.get("/", booksController.getAllBooks);

booksRoutes.get("/:id", booksController.getBookById);

booksRoutes.post("/", verifyAuth, booksController.createNewBook);

booksRoutes.put("/:id", verifyAuth, booksController.updateBookById);

booksRoutes.delete("/:id", verifyAuth, booksController.deleteBookById);

module.exports = booksRoutes;

// ("/", verifyAuth, async (req, res) => {
//   const books = await readFile(filePath);
//   if (!req.body) {
//     return res.status(400).json({ message: `Body cannot be empty` });
//   }
//   const newBook = req.body;

//   const keys = Object.keys(newBook);
//   const requiredKey = ["title", "author", "publishedYear"];
//   const missingKeys = requiredKey.filter((key) => !keys.includes(key));

// if (missingKeys.length > 0) {
//   return res.status(400).json({
//     message: `please provide all information: ${missingKeys.join(", ")}`,
//   });
// }

//   if (typeof newBook.publishedYear !== "number") {
//     return res
//       .status(400)
//       .json({ message: `publishedYear should be in number` });
//   }
//   newBook.id = Date.now();
//   books.push(newBook);
//   await writeFile(filePath, books);
//   res.status(201).json({ message: "book file created", book: newBook });
// });

// booksRoutes.put("/:id", verifyAuth, async (req, res) => {
//   let books = await readFile(filePath);
//   const id = req.params.id;
//   const newBook = req.body;

//   const keys = Object.keys(newBook);
//   const requiredKey = ["title", "author", "publishedYear"];
//   const missingKeys = requiredKey.filter((key) => !keys.includes(key));

//   if (missingKeys.length > 0) {
//     return res.status(400).json({
//       message: `please provide all information: ${missingKeys.join(",")}`,
//     });
//   }

//   const book = books.find((item) => item.id === Number(id));
//   if (book) {
//     books = books.map((item) => {
//       if (item.id === Number(id)) {
//         newBook.id = Number(id);
//         return newBook;
//       }
//       return item;
//     });
//     await writeFile(filePath, books);
//     res.json({ message: `book ${id} updated successful`, book: newBook });
//   } else {
//     res.status(404).json({ message: `book ${id} not found` });
//   }
// });

// booksRoutes.delete("/:id", verifyAuth, async (req, res) => {
//   let books = await readFile(filePath);
//   const id = req.params.id;
//   const book = books.find((item) => item.id === Number(id));

//   if (book) {
//     books = books.filter((item) => item.id !== Number(id));
//     await writeFile(filePath, books);
//     res.json({ message: `book ${id} deleted successful` });
//   } else {
//     res.status(404).json({ message: `book ${id} not found` });
//   }
// });
