const booksService = require("../services/books.service");

const deleteBookById = async (req, res) => {
  const id = Number(req.params.id);
  const isDeleted = await booksService.deleteBookById(id);
  if (isDeleted) {
    res.json({ message: `Book ${id} deleted successfully` });
  } else {
    res.status(404).json({ message: `Book with ${id} not found` });
  }
};

const getAllBooks = async (req, res) => {
  const books = await booksService.getAllBooks();
  res.json({ books });
};

const getBookById = async (req, res) => {
  const id = req.params.id;
  const book = await booksService.getBookById(id);

  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ message: `Book with ${id} not found` });
  }
};

const createNewBook = async (req, res) => {
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
  await booksService.createNewBook(newBook);
  res.status(201).json({ message: "book file created", book: newBook });
};

const updateBookById = async (req, res) => {
  const id = Number(req.params.id);
  if (Number.isNaN(id)) {
    return res.status(400).json({ message: `Please provide a valid Id` });
  }

  if (!req.body) {
    return res.status(400).json({ message: `Body cannot be empty` });
  }
  const newBook = req.body;

  const keys = Object.keys(newBook);
  const requiredKey = ["title", "author", "publishedYear"];
  const missingKeys = requiredKey.filter((key) => !keys.includes(key));

  if (missingKeys.length > 0) {
    return res.status(400).json({
      message: `please provide all information: ${missingKeys.join(",")}`,
    });
  }

  if (typeof newBook.publishedYear !== "number") {
    return res.status(400).send("publishedYear must be a valid number");
  }

  const updatedBook = await booksService.updateBookById(id, newBook);

  if (updatedBook) {
    res.json({ message: `book ${id} updated successfully`, book: updatedBook });
  } else {
    res.status(404).json({ message: `book with ${id} not found}` });
  }
};

module.exports = {
  deleteBookById,
  getAllBooks,
  getBookById,
  createNewBook,
  updateBookById,
};
