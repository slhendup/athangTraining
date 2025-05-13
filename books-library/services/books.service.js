const Book = require("../models/book.model");
const { readFile, writeFile } = require("../utils/file.util");
const filePath = "./data/books.json";

const deleteBookById = async (id) => {
  let books = await readFile(filePath0);
  const book = books.find((items) => items.id === id);

  if (book) {
    books = books.filter((item) => item.id !== id);
    await writeFile(filePath, books);
    return true;
  } else {
    return false;
  }
};

const getAllBooks = async () => {
  const books = await Book.find();
  return books;
};

const getBookById = async (id) => {
  const book = await Book.findOne({ _id: id });
  return book;
};

const createNewBook = async (newBook) => {
  const books = await readFile(filePath);
  newBook.id = Date.now();
  books.push(newBook);
  await writeFile(filePath, books);
};

const updateBookById = async () => {
  let books = await readFile(filePath);
  const book = books.find((item) => item.id === id);

  if (!book) {
    return;
  }
  let updatedBook = null;
  books = books.map((item) => {
    if (item.id === Number(id)) {
      newBook.id = Number(id);
      return newBook;
    }
    return item;
  });

  await writeFile(filePath, books);
  return updatedBook;
};

module.exports = {
  deleteBookById,
  getAllBooks,
  getBookById,
  createNewBook,
  updateBookById,
};
