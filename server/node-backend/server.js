/* eslint-disable no-console */
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');

app.use(cors());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use(express.json());

//own Libraries
const { User } = require("./src/database/db.schemas.User.js");
const { Logger } = require("../node-frontend/src/logging/logging.Colors.js");

//Environment Variables
const config = require("./src/config/config.js");

//init App
const log = new Logger();
new User().init();

//SQL Database
const database = mysql.createConnection({
  host: config.database.HOSTNAME,
  port: config.database.PORT,
  user: config.database.USERNAME,
  password: config.database.PASSWORD,
  database: config.database.DATABASE,
});

//test connection to SQL Database
database.connect(function (err) {
  if (err) throw err;
  console.log(
    log.info(
      `Connected to SQL Database (${config.database.DATABASE}) @ ${
        config.database.HOSTNAME + ":" + config.database.PORT
      }`
    )
  );
});

app.post("/api/register", (req, res) => {
  username = req.body.username;
  password = req.body.password;
  email = req.body.email;

  new User().existing(username, function (userIsExisting) {
    if (userIsExisting) {
      res.send(
        JSON.stringify({
          answer: "user does exist",
          err: "User does exist, so this username is already taken.",
          code: "0001",
          userExists: true
        })
      );
    } else {
      //Der Benutzer existiert noch nicht
      let newUser = new User();
      newUser.createUser(username, password, email);
      res.send(
        JSON.stringify({
          answer: "user does not exist",
          err: "",
          code: "",
          userExists: false
        })
      );
    }
  });
});

app.post("/api/login", (req, res) => {
  username = req.body.username;
  password = req.body.password;
  email = req.body.email;

  const loginUser = new User();
  loginUser.getUser(username, password, function(passwordIsCorrect, userExists){
    if(passwordIsCorrect){
      res.status(200).send(
        JSON.stringify({
          answer: "password is correct",
          err: "",
          code: "",
          login: true,
        })
      );
    } else if (userExists) {
      res.status(403).send(
        JSON.stringify({
          answer: "password is incorrect",
          err: "403 - Unauthorized",
          code: "0002",
          login: false,
        })
      );
    } else {
      res.status(400).send(
        JSON.stringify({
          answer: "User does not exist",
          err: "400 - Bad Request",
          code: "0003",
          login: false,
        })
      );
    }
  });
})


//make app listen on port set in the config file
app.listen(config.env.PORT, () => {
  console.log(
    log.info(`API is listening to Port ${log.highlight(config.env.PORT)}`)
  );
});

