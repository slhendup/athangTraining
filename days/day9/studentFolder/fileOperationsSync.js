const fs = require("node:fs");

try {
  fs.mkdirSync("studentFolder");
  fs.writeFileSync("./studentFolder/notes.txt", "this is my first note");
  fs.appendFileSync("notes.txt", "\n next i will read the text");
  const data = fs.readFileSync("notes.txt", "utf-8");
  console.log(data);
//   fs.unlinkSync("notes.txt");
//   fs.rmdirSync("studentFolder");
} catch (err) {
  console.log(err);
}

//repeating

// try {
//   fs.writeFileSync("notes.txt", "this is my first note");
// } catch (err) {
//   console.log(err);
// }

// try {
//   fs.appendFileSync("notes.txt", "\n next i will read the text");
// } catch (err) {
//   console.log(err);
// }

// try {
//   const data = fs.readFileSync("notes.txt", "utf-8");
//   console.log(data);
// } catch (err) {
//   console.log(err);
// }

// try {
//   fs.unlinkSync("notes.txt");
// } catch (err) {
//   console.log(err);
// }

// try{
// fs.rmdirSync("fileOperationsSync.js");
// }catch(err){
//   console.log(err)
// }
