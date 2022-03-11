const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const supporters = require("./routes/supporters");
const connectDB = require("./db");
const cors = require('cors');
const cookieParser = require('cookie-parser');

app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

connectDB();

app.use('/supporters', supporters);

const portNumber = 4000;
app.listen(portNumber, function () {
  console.log("Example app listening on port " + portNumber);
});

