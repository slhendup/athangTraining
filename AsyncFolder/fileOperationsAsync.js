const fs = require("node:fs/promises");
const path = require("node:path");

async function fileOperations() {
  try {
    const file = "tasks.txt";
    const folder = "AsyncFolder";
    const filePath = path.join(folder, file);
    await fs.mkdir(folder);
    await fs.writeFile(filePath, "task 1:learn Node.js FS module");
    await fs.appendFile(filePath, "\n task 2: practice more examples");
    const data = await fs.readFile(filePath, "utf-8");
    console.log(data);
    // await fs.unlink(filePath);
    // await fs.rmdir(folderName);
  } catch (erroe) {
    console.log(error);
  }
}
