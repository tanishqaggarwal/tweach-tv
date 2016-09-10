var express = require("express");
var uuid = require("uuid");
var router = express.Router();
var app = express();
var Room = require("./room");

var rooms = {};
var viewers = [];

router.post("/debug/rooms", function(req, res) {
  res.send(rooms);
});

route.get("/", function(req, res) {
  res.render("index.html");
});

router.post("/new/private", function(req, res) {
  var r = new Room(req.get("uid"));
  rooms[r.roomid] = r;
  res.json(r.toJSON());
});

router.post("/new/public", function(req, res) {
  var r = new Room(req.get("uid"));
  rooms[r.roomid] = r;
  res.json(r.toJSON());
});


// router.get("/new/public", function(req, res) {
//   if(rooms[req.get("roomid")]) {
//     res.sendStatus(409);
//   } else {
//     var r = new Room(req.get("uid"));
//     r.roomid = req.get("roomid");
//     rooms[r.roomid] = r;
//     res.json(r.toJSON());
//   }
// });

router.post("/new/viewerid", function(req, res) {
  if(!viewers.contains(req.get("uid"))) {
    viewers.push(req.get("uid"));
    res.send(viewers);
    res.end();
  } else {
    res.send(409);
  }
});

router.get("/room/:roomid", function(req, res) {
  if(!rooms[req.params("roomid")]) {
    res.sendStatus(404);
  } else {
    var r = rooms[req.params("roomid")];
    if(req.get("uid") != r.owner) {
      if(r.viewers.indexOf(req.get("uid")) < 0) {
        r.viewers.push(req.get("uid"));
      }
      console.log("Need to make the instructor call");
    }
    res.end();
  }
});

app.use("/", router);
app.listen(6969);
console.log("listening on 6969");
