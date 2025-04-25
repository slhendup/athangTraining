const http = require("node:http");

//define the port number the server will listern on
const PORT = 3000;

const rooms = [101, 102, 103, 104, 105];

let roomInfo = {
  101: {
    roomName: 101,
    bed: true,
    table: false,
    tv: true,
    toilet: true,
  },
  102: {
    roomName: 102,
    bed: true,
    table: false,
    tv: true,
    toilet: true,
  },
  103: {
    roomName: 103,
    bed: true,
    table: false,
    tv: true,
    toilet: true,
  },
  104: {
    roomName: 104,
    bed: true,
    table: false,
    tv: true,
    toilet: true,
  },
  105: {
    roomName: 105,
    bed: true,
    table: false,
    tv: true,
    toilet: true,
  },
};

//create the server
const server = http.createServer(function (req, res) {
  console.log(`URL::${req.method} ::${req.url}`);
  const parts = req.url.split("/");

  console.log(parts);
  if (req.method === "GET") {
    if (parts[0] === "") {
      if (parts[1] === "") {
        //set the response headers
        res.writeHead(200, { "Content-Type": "text/plain" });

        //write the response body
        res.end("Hello Boss welcome to Tashi Yeaserling Hotal");
      }
      if (parts[1] === "rooms") {
        if (parts[2]) {
          const info = roomInfo[parts[2]];

          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(
            JSON.stringify(
              info ? info : `No room found with the provided ${parts[2]} number`
            )
          ); //hendaling the default rooms
          return;
        }
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(rooms));
      }

      if (parts[1] === "kitchen") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end(JSON.stringify(`Welcome to Tashi Yeaserling Hotal kitchen`));
      }
    }
  }

  if (req.method === "POST") {
    if (parts[1] === "rooms") {
      let body = "";
      req.on("data", (chunk) => {
        body += chunk.toString();
      });
      req.on("end", () => {
        //when we r done receving the chunk of data
        const newRoom = JSON.parse(body);
        const roomNumber = Number(newRoom.roomName);

        if (rooms.includes(roomNumber)) {
          res.writeHead(400, { "Content-Type": "application/json" });

          res.end(
            JSON.stringify({
              message: `Room with ${roomNumber} already present`,
            })
          );
          return;
        }
        rooms.push(roomNumber);
        roomInfo[roomNumber] = newRoom;

        res.writeHead(201, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "created", room: newRoom }));
      });
    }
  }
});

//Start listining on the specifiedd port
server.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
