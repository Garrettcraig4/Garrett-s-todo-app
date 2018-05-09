require("dotenv").config();

const express = require("express");

const { json } = require("body-parser");

const session = require("express-session");

const cors = require("cors");

const massive = require("massive");

const port = process.env.port || 3001;

const app = express();

const { SESSION_SECRET, CONNECTION_STRING } = process.env;

massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
});

app.use(json());

app.use(cors());

app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 10000000
    }
  })
);

app.listen(port, () => {
  console.log(`server is on the port ${port}`);
});
