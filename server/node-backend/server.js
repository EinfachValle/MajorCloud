/* eslint-disable no-console */
const http = require('http');
const mysql = require('mysql');

const config = require('./src/config/config.js');
const { Logger } = require('./src/logging/logging.Colors.js');
const { User } = require('./src/database/db.schemas.User.js');

const log = new Logger();

//SQL Database
//test connection to SQL Database
try {
  new User().init();

  const database = mysql.createConnection({
    host: config.database.HOSTNAME,
    port: config.database.PORT,
    user: config.database.USERNAME,
    password: config.database.PASSWORD,
    database: 'neatbeat',
  });

  database.connect(function (err) {
    if(err) throw err;
    console.log(
      log.info(
        `Connected to SQL Database (${config.database.DATABASE}) @ ${
          config.database.HOSTNAME + ':' + config.database.PORT
        }`
      )
    );
  });
}catch(e){
  console.log(e)
}

const server = http.createServer((req, res) => {
  const clientIP = req.socket.remoteAddress;
  const method = req.method;

  if (clientIP === 'localhost' || (clientIP === '::1' && method === 'POST')) {
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
  } else {
    res.writeHead(403, {
      'Content-Type': 'text/plain',
    });
    res.write('Access Denied');
    res.end();
  }
});

server.listen(config.env.PORT, () => {
  console.log(log.info(`API is listening to port ${log.highlight(config.env.PORT)}`));
});
