const express = require("express");
const PORT = 3000;
const app = express();
app.use(express.json());

const logger = (req, res, next) => {
  console.log(` ${(req.method)} ${req.path} ${JSON.stringify(req.body)}`);
  next();
};

const checkBody = (req, res, next) => {
  if (req.body) {
    next();
  }
  res.status(400).send(`body cannot be empty`);
};

app.use(logger);

let rooms = [
  {
    id: "101",  
    bed: true,
    table: false,
    tv: true,
    toilet: true,
  },
  {
    id: "102",
    bed: true,
    table: false,
    tv: true,
    toilet: true,
  },
  {
    id: "103",
    bed: true,
    table: false,
    tv: true,
    toilet: true,
  },
  {
    id: "104",
    bed: true,
    table: false,
    tv: true,
    toilet: true,
  },
  {
    id: "105",
    bed: true,
    table: false,
    tv: true,
    toilet: true,
  },
];

app.get("/", (req, res) => {
  res.send("hello form tashi hotel");
});

app.get("/rooms", (req, res) => {
  res.send(rooms);
});

app.get("/rooms/:id", (req, res) => {
  const id = req.params.id;
  const room = rooms.find((item) => item.id === id);
  if (room) {
    res.json(room);
  } else {
    res.status(404).json({ message: `room ${id} not found` });
  }
});

app.delete("/rooms/:id", (req, res) => {
  const id = req.params.id;
  const room = rooms.find((item) => item.id === id);

  if (room) {
    rooms = rooms.filter((item) => item.id !== id);
    res.json({ message: `room ${id} deleted successful` });
  } else {
    res.status(404).json({ message: `room ${id} not found` });
  }
});

app.put("/rooms/:id", checkBody, (req, res) => {
  const id = req.params.id;
  const newData = req.body;
  const room = rooms.find((item) => item.id === id);
  const keys = Object.keys(newData);
  const requiredKey = ["table", "tv", "toilet"];
  const missingKeys = requiredKey.filter((keys) => !keys.includes(key));

  if (missingKeys.length > 0) {
    return res.status(400).json({
      message: `please provide all information: ${missingKeys.join(",")}`,
    });
  }

  if (room) {
    console.log(JSON.stringify(rooms));
    rooms = rooms.map((item) => {
      if (item.id !== id) {
        newData.id = id;
        return newData;
      }
      return item;
    });
    console.log(JSON.stringify(rooms));

    res.json({ message: `room ${id} updated successful`, room: newData });
  } else {
    res.status(404).json({ message: `room ${id} not found` });
  }
});

app.post("/rooms", checkBody, (req, res) => {
  const newRoom = req.body;
  const room = rooms.find((item) => item.id === newRoom.id);
 
  if (room) {
    return res
      .status(400)
      .json({ message: `room with number ${roomNumber} already exists` });
  }
  rooms.push(newRoom);
  res.status(201).json({ message: "room created", room: newRoom });
});
 