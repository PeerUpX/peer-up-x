const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const supporters = require("./routes/supporters");
const connectDB = require("./db");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

connectDB();

app.use('/supporters', supporters);

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});

