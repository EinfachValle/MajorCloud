/* eslint-disable no-console */
var http = require('http');
const config = require('../config/config.js')
const { Logger } = require('../logging/logging.Colors.js');

const log = new Logger();

class Request {
  constructor(path, content) {
    this.content = content;
    this.path = path;
  }

  async callBackend(path, content, callback) {
    const options = {
      hostname: 'localhost',
      port: config.env.BACKEND_PORT,
      path: path,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': content.length,
      },
    };

    const req = http.request(options, (res) => {
      res.on('data', (data) => {
      });

      res.on('end', (data) => {
        console.log(data)
        callback(data);
      })
    });

    req.on('error', (error) => {
      console.error(error);
    });

    req.write(content);
    req.end();
  }
}

module.exports = { Request };
