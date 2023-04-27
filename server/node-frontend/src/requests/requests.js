const net = require('net');

class Request {
  constructor(path, content) {
    this.content = content;
    this.path = path;
  }

  callBackend(path, content, callback) {
    var socket = new net.Socket();
    socket.connect(1000, 'localhost', function () {
    });
    socket.on('data', function (rawData) {
      const data = JSON.parse(rawData);
      callback({
        status: 200,
        content: {
          Hallo: "Moin"
        }
      });
      socket.end();
    });
  }
}

module.exports = { Request };
