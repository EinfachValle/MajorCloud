/* eslint-disable no-console */
const config = require("../config/config.js");
const mysql = require("mysql");
const bcrypt = require("bcrypt");
const { Logger } = require("../../../node-frontend/src/logging/logging.Colors.js");

const database = mysql.createConnection({
  host: config.database.HOSTNAME,
  port: config.database.PORT,
  user: config.database.USERNAME,
  password: config.database.PASSWORD,
  database: config.database.DATABASE,
});

const log = new Logger();

class User {
  constructor(username, password, email, requester) {
    this.username = username;
    this.passord = password;
    this.email = email;
    this.requester = requester;
  }

  init() {
    try {
      database.connect(function (err) {
        database.query(
          `CREATE TABLE IF NOT EXISTS \`neatbeat\`.\`accounts\` (
            \`id\` INT NOT NULL AUTO_INCREMENT,
            \`username\` VARCHAR(255) NULL,
            \`password\` VARCHAR(255) NULL,
            \`email\` VARCHAR(255) NULL,
            \`verified\` TINYINT NULL,
            \`groups\` JSON NULL,
            PRIMARY KEY (\`id\`)
        )
        ENGINE = InnoDB
        DEFAULT CHARACTER SET = utf8;`,
          [],
          function (error, results, fields) {
            console.log(
              log.info("DB@init: The table \"accounts\" is initialized")
            );
          }
        );
      });
    } catch (e) {
      console.log(log.error(e));
    }
  }

  existing(username, callback) {
    try {
      database.connect(function (err) {
        database.query(
          `SELECT * FROM ${config.database.USERTABLE} WHERE username = ?`,
          [username],
          function (error, results, fields) {
            if (results.length !== 0) {
              callback(true);
            } else {
              callback(false);
            }
          }
        );
      });
    } catch (e) {
      console.log(log.error(e));
    }
  }

  createUser(username, password, email, callback) {
    if(username == undefined || password == undefined || email == undefined){
      callback(false);
      return;
    }
    try {
      bcrypt.hash(password, 10, (err, passwordhash) => {
        if (err) {
          console.log(log.error(err));
        }
        database.connect(function (err) {
          database.query(
            "INSERT INTO accounts (username, password, email, verified) VALUES (?, ?, ?, ?)",
            [username, passwordhash, email, false],
            function (error, results, fields) {
              console.log(
                log.dev(
                  `DB@createUser: ${results.affectedRows} row(s) affected`
                )
              );
              
            }
          );
        });
      });
    } catch (e) {
      console.log(log.error(e));
    }
  }

  deleteUser(username, email, requester) {
    try {
      database.connect(function (err) {
        database.query(
          "DELETE FROM accounts WHERE username = ?  AND email = ?",
          [username, email],
          function (error, results, fields) {
            console.log(
              log.dev(`DB@deleteUser: ${results.affectedRows} row(s) affected`)
            );
          }
        );
      });
    } catch (e) {
      console.log(log.error(e));
    }
  }

  getUser(username, password, callback) {
    try {
      database.connect(function (err) {
        database.query(
          "SELECT password, email  FROM accounts WHERE username = ?",
          [username],
          function (error, results, fields) {
            if (results[0] == undefined) {
              callback(false, false);
            } else {
              bcrypt.compare(password, results[0].password).then(
                (result) => {
                  callback(result, true);
                  console.log(log.dev("Login"));
                },
                (err) => {
                  console.log(log.error(err));
                }
              );
            }
          }
        );
      });
    } catch (e) {
      console.log(log.error(e));
    }
  }

  editUser(username, password, requester){

  }
}

module.exports = { User };
