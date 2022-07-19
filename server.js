// Load Node modules
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');

// Initialise Express
const app = express();

// Passport Config
require('./config/passport')(passport);


// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true ,useUnifiedTopology: true}
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));



// Set the view engine to EJS

app.set('view engine', 'ejs');


// Express body parser
app.use(express.urlencoded({ extended: true }));


// Express session
app.use(
    session({
      secret: ['veryimportantsecret', 'notsoimportantsecret' ,'highlyprobablysecret'],
      resave: true,
      saveUninitialized: true
    })
  );
  
// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Connect flash
app.use(flash());

// Global variables
app.use(function(req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});



//Routes for login
// Routes
app.use('/', require('./routes/index.js'));
app.use('/users', require('./routes/users.js'));



// *** GET Routes - display pages ***

// Render static files
app.use(express.static('public'));
//404
app.get('/404', function (req, res) {
    res.render('pages/404');
});






// Port website will run on
const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server running on  ${PORT}`));


