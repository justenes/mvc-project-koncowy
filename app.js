require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const session = require('express-session');
const cocktailRoutes = require('./routes/cocktailRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

console.log("starting...");

mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log('Succesfully connected');
  app.listen(3000, () => {
    console.log('http://localhost:3000 it works');
  });
})
.catch(err => {
  console.error('Connecting error', err.message);
});

//express ayarlari
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));

app.use((req, res, next) => {
  res.locals.userId = req.session.userId;
  next();
});

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use('/uploads', express.static('public/uploads'));

// rotalar
app.use('/', userRoutes);
app.use('/', cocktailRoutes);
