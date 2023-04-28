/* eslint-disable no-console */
// server.js
var express = require('express');
const path = require('path');
const net = require('net');
var serveStatic = require('serve-static');
app = express();
app.use(serveStatic(path.join(__dirname, '../../dist')));
app.use(express.json())

var port = 80;
var hostname = '127.0.0.1';

const { Logger } = require('./src/logging/logging.Colors.js');
const { Request } = require('./src/requests/requests.js');

var log = new Logger();

app.listen(port, hostname, () => {
  console.log(log.info(`Vue App is served on port ${log.highlight(port)}`));
  console.log(log.info('Directory for vue app: ' + path.join(__dirname, '../../dist')));
});

app.get('/', function (req, res) {
  res.sendFile(__dirname, '/index.html');
});

app.post('/api/*', async (req, res) => {
    var request = new Request();
    request.callBackend(req.url, JSON.stringify(req.body), (rawResponse) => {
      const response = JSON.parse(rawResponse)
      res.status(response.status).send(response.content)
    });
});