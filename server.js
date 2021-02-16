require("dotenv").config();
const express = require("express");
const app = express();
const handle = require("express-handlebars");
const mongoose = require("mongoose");
const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const bcrypt = require('bcrypt');
const session = require('express-session');
mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.engine("handle", handle({extname: ".handle"}));
app.set("view-engine", "handle");
app.use("/public", express.static(`${process.cwd()}/public`));
app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUnInitialised: true
}))
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(passport.initialize);
app.use(passport.session());
const port = process.env.PORT || 3000;
//app.use("/admin", require("./routes/admin.js"));
app.get("/admin", (req, res) => {
  res.sendFile(__dirname + "/admin/login.html");
});
app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});