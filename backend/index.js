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
const authRouter = require('./routes/AuthenticationRouter');
const auth = require('./routes/auth');
app.use('/images/',express.static('images'))
app.use(express.json());
app.use(cors({
  origin: '*'
}));




// const passportSetup = require('./routes/AuthenticationRouter');
// const passport = require('passport');
// const session = require('express-session');
// const cookieSession = require('cookie-session');
// const cookieParser = require('cookie-parser');
// app.use(cookieParser())


// const port = 3000;


mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
  console.log("Connected to Database");
}).catch((err) => {
  console.log("Not Connected to Database ERROR! ", err);
});



<<<<<<< HEAD
// app.use(session({
//   secret: 'keyboard cat',
//   resave: false,
//   saveUninitialized: true,
//   cookie: { secure: true }
// }))



// app.use(cookieSession({
//   maxAge: 24 * 60 * 60 * 1000,
//   keys: [',input']
// }));
// app.use(passport.initialize());
// app.use(passport.session());





app.use('/admin', adminRouter);
app.use('/auther', autherRouter);
app.use('/user', userRouter);
app.use('/books', booksRouter);
// app.use('/auth', authRouter);
app.use('/auth', auth);


app.use((req,res)=>{
  res.status(404).send("page not foned")
})
=======
>>>>>>> bdd3baa77b0045777bfc3d04b641000e62aea732
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

module.exports = app;