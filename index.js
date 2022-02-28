const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const expressSession = require("express-session");
const MongoStore = require('passwordless-mongostore-bcrypt-node');
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const passwordless = require("passwordless");

dotenv.config();

mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to MongoDB");
  }
);

const yourEmail = process.env.EMAIL;
var yourPwd = process.env.OUTLOOK_PASSWORD;
var yourSmtp = "smtp-mail.outlook.com";
var smtpServer = email.server.connect({
  user: yourEmail,
  password: yourPwd,
  timeout: 60000,
  host: yourSmtp,
  tls: { ciphers: "SSLv3" },
});
const pathToMongoDb = process.env.MONGO_URL

app.listen(process.env.PORT, () => {
  console.log("Backend server is running!");
});