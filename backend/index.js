require("dotenv").config();
const PORT=process.env.PORT 
const url =process.env.URL
const express = require("express");
const mongoose = require("mongoose");

const cors = require('cors');
const app = express();
const adminRouter = require('./routes/admin');
const autherRouter = require('./routes/auther');
const userRouter = require('./routes/user');
const booksRouter = require('./routes/books');

// const Authentication=require("./routes/");

app.use(express.json());
app.use(cors({
  origin: '*'
}));

// const port = 3000;


mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
  console.log("Connected to Database");
}).catch((err) => {
  console.log("Not Connected to Database ERROR! ", err);
});

app.use('/admin', adminRouter);
app.use('/auther', autherRouter);
app.use('/user', userRouter);
app.use('/books', booksRouter);



// app.post('/upload', upload.single('url'), function (req, res) {
//    console.log(req.file)
//    console.log("djd")
//    console.log( req.body)
//    res.send("done")
// });




app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
