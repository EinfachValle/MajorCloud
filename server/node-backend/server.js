/* eslint-disable no-console */
const http = require('http');
const config = require('./src/config/config.js');
const { Logger } = require('./src/logging/logging.Colors.js');
const { User } = require('./src/database/db.schemas.User.js');

const log = new Logger();

new User().init();

const server = http.createServer((req, res) => {
  let body = '';

  req.on('data', (chunk) => {
    body += chunk.toString();
  });

  req.on('end', () => {
    console.log(log.dev(req.url));
    if (req.url.startsWith('/api/register')) {
      const parsedBody = JSON.parse(body);
      const user = new User();
      user.existing(parsedBody.username, function (result) {
        if (result === true) {
          const response = JSON.stringify({
            content: {
              message: 'user does already exist',
              error: '0001',
              registered: false,
            },
            status: 202,
          });
          res.writeHead(202, {
            'Content-Type': 'application/json',
          });
          res.write(response);
          res.end();
        } else if (result === false) {
          user.createUser(
            parsedBody.username,
            parsedBody.password,
            parsedBody.email,
            function (done) {
              if (done === false) {
                const response = JSON.stringify({
                  content: {
                    message: 'not all needed information is provided',
                    error: '0002',
                    registered: true,
                  },
                  status: 406,
                });
                res.writeHead(200, {
                  'Content-Type': 'application/json',
                });
                res.write(response);
                res.end();
                return;
              } else {
                const response = JSON.stringify({
                  content: {
                    message: 'user created',
                    error: '',
                    registered: true,
                  },
                  status: 201,
                });
                res.writeHead(201, {
                  'Content-Type': 'application/json',
                });
                res.write(response);
                res.end();
              }
            }
          );
        }
      });
    } else if (req.url.startsWith('/api/login')) {
      console.log(log.dev('login'));
    }
  });
});

server.listen(config.env.PORT, () => {
  console.log(log.info(`API is listening to port ${log.highlight(config.env.PORT)}`));
});
