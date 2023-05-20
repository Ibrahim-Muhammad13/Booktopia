require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const cors = require('cors');
const app = express();
const adminRouter = require('./routes/admin');

app.use(express.json());
app.use(cors({
  origin: '*'
}));

const port = 3000;


mongoose.connect('mongodb://127.0.0.1:27017/good-reads', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
  console.log("Connected to Database");
}).catch((err) => {
  console.log("Not Connected to Database ERROR! ", err);
});

app.use('/admin', adminRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
