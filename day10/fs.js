//using fs module
//creating a file
//write to a file
// read from a file
// creating a folder
//delete a file and folder



// async 
const fs = require("node:fs");


fs.writeFile("sonam.txt", "hello i am sonam/this is me", (err) => {
  if (err) {
    console.error(err);
  } else {
    // file written successfully
  }
});

//sync
try {
    fs.writeFileSync("lhendup.txt", "i am 23 years old");
    // file written successfully
  } catch (err) {
    console.error(err);
  }
