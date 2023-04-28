/* eslint-disable no-console */
const http = require('http');
const config = require('./src/config/config.js')
const { Logger } = require('./src/logging/logging.Colors.js');

const log = new Logger();

const server = http.createServer((req, res) => {
  let body = '';

  req.on('data', (chunk) => {
    body += chunk.toString();
  });

  req.on('end', () => {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
          status: 200,
          content: {
            "register": true
          }
        }))
  });
});

server.listen(config.env.PORT, () => {
  console.log(log.info(`API is listening to port ${log.highlight(config.env.PORT)}`));
});
