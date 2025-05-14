const Book = require("../models/book.model");
const { readFile, writeFile } = require("../utils/file.util");
const filePath = "./data/books.json";

const deleteBookById = async (id) => {
  const deleted = await Book.deleteOne({ _id: id });

  if (deleted.deletedCount > 0) {
    return true;
  } else {
    return false;
  }
  //   const book = books.find((items) => items.id === id);

  //   if (book) {
  //     books = books.filter((item) => item.id !== id);
  //     await writeFile(filePath, books);
  //     return true;
  //   } else {
  //     return false;
  //   }
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
  const book = new Book(newBook);
  const savedBook = await book.save();
  console.log(savedBook);
  return savedBook;
  // with out mongo db
  // const books = await readFile(filePath);
  // newBook.id = Date.now();
  // books.push(newBook);
  // await writeFile(filePath, books);
};

const updateBookById = async (id, newBook) => {
  const update = await Book.updateOne({ _id: id }, { $set: newBook });
  if (update.matchedCount > 0) {
    const updatedBook = await Book.findOne({ _id: id });
    return updatedBook;
  } else {
    return;
  }
  // if (!book) {
  //   return;
  // }

  // let updatedBook = null;
  // books = books.map((item) => {
  //   if (item.id === id) {
  //     newBook.id = id;
  //     updatedBook = newBook;
  //     return newBook;
  //   }
  //   return item;
  // });

  // await writeFile(filePath, books);

  return updatedBook;
};

module.exports = {
  deleteBookById,
  getAllBooks,
  getBookById,
  createNewBook,
  updateBookById,
};
