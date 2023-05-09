/* eslint-disable no-console */
// server.js
const express = require('express');
const path = require('path');
const net = require('net');
const serveStatic = require('serve-static');

app = express();
const router = express.Router();

app.use(serveStatic(path.join(__dirname, '../../dist')));
app.use(express.json())

var port = 80;

const { Logger } = require('./src/logging/logging.Colors.js');
const { Request } = require('./src/requests/requests.js');

//new logger instance
var log = new Logger();

router.use((req, res, next) => {
  res.sendFile(__dirname, '/index.html');
  next();
});

app.post('/api/*', async (req, res) => {
    var request = new Request();
    request.callBackend(req.url, JSON.stringify(req.body), (rawResponse) => {
      const response = JSON.parse(rawResponse)
      res.status(response.status).send(response.content)
    });
});

//handel type 500 errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

//mount router
app.use('*', router);

//init frontend server
app.listen(port, () => {
  console.log(log.info(`Vue App is served on port ${log.highlight(port)}`));
  console.log(log.info('Directory for vue app: ' + path.join(__dirname, '../../dist')));
  console.log(log.warn('NOTE: This is a development version. don not use in production environment.'));
});