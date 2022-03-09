const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const supporters = require("./routes/supporters");
const connectDB = require("./db");
const cors = require('cors');
const cookieParser = require('cookie-parser');

app.use(
  cors({
    origin: "*",
  })
)

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

connectDB();

app.use('/supporters', supporters);

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});

