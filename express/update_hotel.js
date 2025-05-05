const express = require("express");
const PORT = 3000;
const app = express();
app.use(express.json());
const filePath = "room.json";
const fs = require("node:fs/promises");

app.use(express.json());
//reading as a string
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

app.get("/", (req, res) => {
  res.send("hello form tashi hotel");
});

//get all rooms
app.get("/rooms", async (req, res) => {
  const rooms = await readFile();
  res.send(rooms);
});

//to get one room by id
app.get("/rooms/:id", async (req, res) => {
  const rooms = await readFile();
  const id = req.params.id;
  const room = rooms.find((item) => item.id === id);
  if (room) {
    res.json(room);
  } else {
    res.status(404).json({ message: `room ${id} not found` });
  }
});

app.delete("/rooms/:id", async (req, res) => {
  const rooms = await readFile();
  const id = req.params.id;
  const room = rooms.find((item) => item.id === id);

  if (room) {
    rooms = rooms.filter((item) => item.id !== id);
    await writeFile(rooms);
    res.json({ message: `room ${id} deleted successful` });
  } else {
    res.status(404).json({ message: `room ${id} not found` });
  }
});

app.put("/rooms/:id", async (req, res) => {
  let rooms = await readFile();
  const id = req.params.id;
  const newData = req.body;
  const room = rooms.find((item) => item.id === id);
  const keys = Object.keys(newData);
  const requiredKey = ["table", "tv", "toilet"];
  const missingKeys = requiredKey.filter((key) => !keys.includes(key));

  if (missingKeys.length > 0) {
    return res.status(400).json({
      message: `please provide all information: ${missingKeys.join(",")}`,
    });
  }

  if (room) {
    console.log(JSON.stringify(rooms));
    rooms = rooms.map((item) => {
      if (item.id === id) {
        newData.id = id;
        return newData;
      }
      return item;
    });
    await writeFile(rooms);
    res.json({ message: `room ${id} updated successful`, room: newData });
  } else {
    res.status(404).json({ message: `room ${id} not found` });
  }
});

app.post("/rooms", async (req, res) => {
  const rooms = await readFile();
  const newRoom = req.body;
  const room = rooms.find((item) => item.id === newRoom.id);
  console.log(room);

  if (room) {
    return res
      .status(400)
      .json({ message: `room with number ${newRoom.id} already exists` });
  }
  rooms.push(newRoom);
  await writeFile(rooms);
  res.status(201).json({ message: "room created", room: newRoom });
});

app.listen(PORT, () => {
  console.log(` server is running on http://localhost:${PORT}`);
});
