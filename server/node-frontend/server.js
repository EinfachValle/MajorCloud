/* eslint-disable no-console */
// server.js
var express = require('express');
const path = require('path');
var serveStatic = require('serve-static');
app = express();
app.use(serveStatic(path.join(__dirname, '../../dist')));
app.use(express.json())

var port = 80;
var hostname = '127.0.0.1';

const { Logger } = require('../node-frontend/src/logging/logging.Colors.js');
const { Request } = require('../node-frontend/src/requests/requests.js');

var log = new Logger();

app.listen(port, hostname, () => {
  console.log(log.info(`Vue App is served on port ${log.highlight(port)}`));
  console.log(log.info('Directory for vue app: ' + path.join(__dirname, '../../dist')));
});

app.get('/', function (req, res) {
  res.sendFile(__dirname, '/index.html');
});

app.post('/*', (req, res) => {
    new Request.callBackend(req.url, req.body, (response) => {
  })
});