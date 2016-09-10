var uuid = require("uuid");

function Room(owner) {
  this.viewers = [];
  this.roomid = uuid.v4();
  this.owner = owner;
}

Room.prototype.toJSON = function() {
  return {roomid: this.roomid, viewers: this.viewers, owner: this.owner};
}

module.exports = Room;
