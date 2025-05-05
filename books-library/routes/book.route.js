const express = require("express");
const fs = require("node:fs/promises");

const bookRoutes = express.Router();

const filePath = "./data/books.json";

const readFile = async () => {
  try {
    const content = await fs.readFile(filePath, "utf-8");
    return JSON.parse(content);
  } catch (err) {
    console.log(err);
    return [];
  }
};

//writing as a string
const writeFile = async (data) => {
  try {
    await fs.writeFile(filePath, JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
};

bookRoutes.get("/", async (req, res) => {
  const books = await readFile();
  res.send(books);
});

bookRoutes.get("/:id", async (req, res) => {
  const books = await readFile();
  const id = req.params.id;
  const book = books.find((item) => item.id === Number(id));
  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ message: `book ${id} not found` });
  }
});

bookRoutes.post("/", async (req, res) => {
  const books = await readFile();
  if (!req.body) {
    return res.status(400).json({ message: `Body cannot be empty` });
  }
  const newBook = req.body;

  const keys = Object.keys(newBook);
  const requiredKey = ["title", "author", "publishedYear"];
  const missingKeys = requiredKey.filter((key) => !keys.includes(key));

  if (missingKeys.length > 0) {
    return res.status(400).json({
      message: `please provide all information: ${missingKeys.join(", ")}`,
    });
  }

  if (typeof newBook.publishedYear !== "number") {
    return res
      .status(400)
      .json({ message: `publishedYear should be in number` });
  }
  newBook.id = Date.now();
  books.push(newBook);
  await writeFile(books);
  res.status(201).json({ message: "book file created", book: newBook });
});

bookRoutes.put("/:id", async (req, res) => {
  let books = await readFile();
  const id = req.params.id;
  const newBook = req.body;

  const keys = Object.keys(newBook);
  const requiredKey = ["title", "author", "publishedYear"];
  const missingKeys = requiredKey.filter((key) => !keys.includes(key));

  if (missingKeys.length > 0) {
    return res.status(400).json({
      message: `please provide all information: ${missingKeys.join(",")}`,
    });
  }

  const book = books.find((item) => item.id === Number(id));
  if (book) {
    books = books.map((item) => {
      if (item.id === Number(id)) {
        newBook.id = Number(id);
        return newBook;
      }
      return item;
    });
    await writeFile(books);
    res.json({ message: `book ${id} updated successful`, book: newBook });
  } else {
    res.status(404).json({ message: `book ${id} not found` });
  }
});

bookRoutes.delete("/:id", async (req, res) => {
  let books = await readFile();
  const id = req.params.id;
  const book = books.find((item) => item.id === Number(id));

  if (book) {
    books = books.filter((item) => item.id !== Number(id));
    await writeFile(books);
    res.json({ message: `book ${id} deleted successful` });
  } else {
    res.status(404).json({ message: `book ${id} not found` });
  }
});

module.exports = bookRoutes;
