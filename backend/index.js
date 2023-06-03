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
const reviewRouter = require('./routes/BookReveiw');
const auth = require('./routes/auth');
const profile=require("./routes/user_books")
const cookieSession = require('cookie-session')
app.use('/images/',express.static('images'))

app.use(express.json());
app.use(cors({
  origin: '*'
}));
// httpNodeCors: {
//   origin: "*",
//   methods: "GET,PUT,POST,DELETE"
// },


app.use(cookieSession({
  name: 'session',
  secret: 'my-secret-key',
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}));

const passport = require('passport')
require('./config/passport')
require('./config/passpordfacebook')
require('./config/passpordgoogle')
app.use(passport.initialize())
app.use(passport.session())
// app.use(queryParser());


mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
  console.log("Connected to Database");
}).catch((err) => {
  console.log("Not Connected to Database ERROR! ", err);
});


app.use('/admin', adminRouter);
app.use('/auther', autherRouter);
app.use('/user', userRouter);
app.use('/books', booksRouter);
app.use('/auth', auth);
app.use(['/add','/profile'], profile);
app.use(['/review'], reviewRouter);

app.use((req,res)=>{
  res.status(404).send("page not foned !")
})
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

module.exports = app;