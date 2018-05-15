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

var sess;

app.get("/", function(req, res) {
  sess = req.session;
  //Session set when user Request our app via URL
  if (sess.email) {
    /*
* This line check Session existence.
* If it existed will do some action.
*/
    res.redirect("/History");
  } else {
  }
});

app.post(`/api/login`, (req, res) => {
  req.app
    .get("db")
    .Checkpassanduser([req.body.email, req.body.pass])
    .then(response => {
      res.status(200).json(response);

      sess = req.session;
      //In this we are assigning email to sess.email variable.
      //email comes from HTML page.
      sess.email = req.body.email;
      res.end("done");
      console.log(sess, "this is req session");
    });
});

app.post(`/api/Createuser`, (req, res) => {
  req.app
    .get("db")
    .Createuser([req.body.user, req.body.pass, req.body.email])
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => console.log("Err when createing user", err));
});

app.listen(port, () => {
  console.log(`server is on the port ${port}`);
});
