const express = require('express')
const app = express()
const knex = require('knex')
const cors = require('cors')
const port = process.env.PORT || 3000;
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const session = require('express-session')
var path = require('path')
var passport = require('passport')
var FacebookStrategy = require('passport-facebook').Strategy;
var GoogleStrategy = require('passport-google-oauth2').Strategy;
var YahooStrategy = require('passport-yahoo-oauth').Strategy;
var TwitterStrategy = require('passport-twitter').Strategy;


app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true,
  cookie: { secure: false }
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  // User.findById(id, function(err, user) {
    done(null, id);
  // });
});

passport.use(new FacebookStrategy({
    clientID: '1396338423796632',
    clientSecret: '4a6fa770ae26c297f54416672294c40b',
    callbackURL: "https://warm-waters-71689.herokuapp.com/auth/facebook/callback",
    profileFields:['id', 'displayName', 'photos','emails', 'first_name', 'birthday', 'age_range', 'political', 'locale', 'location', 'relationship_status'],
  },

  function(accessToken, refreshToken, profile, cb) {
    console.log(profile["_json"]);
    cb(null, profile)
  }
));

app.get('https://warm-waters-71689.herokuapp.com/auth/facebook', passport.authenticate('facebook', {
   scope:['email', 'public_profile'],
   display: 'popup',
 }))

app.get('https://warm-waters-71689.herokuapp.com/auth/facebook/callback',
  passport.authenticate('facebook', { successRedirect: '/',
                                      failureRedirect: '/login' }));

// Use the GoogleStrategy within Passport.
//   Strategies in passport require a `verify` function, which accept
//   credentials (in this case, a token, tokenSecret, and Google profile), and
//   invoke a callback with a user object.
passport.use(new GoogleStrategy({
clientID: '898385406882-7hd28m6gk0r55ab8hpo557p44hi8l9j4.apps.googleusercontent.com',
consumerSecret: 'c5362Izz7omu6xnw3r-5_zcX',
callbackURL: "https://enrollme-4854d.firebaseapp.com/auth/google/callback"
},

function(token, tokenSecret, profile, done) {
console.log(profile);
// User.findOrCreate({ googleId: profile.id }, function (err, user) {
return done(err, user);
}));
//
// // GET /auth/google
// //   Use passport.authenticate() as route middleware to authenticate the
// //   request.  The first step in Google authentication will involve redirecting
// //   the user to google.com.  After authorization, Google will redirect the user
// //   back to this application at /auth/google/callback
app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }));

// // GET /auth/google/callback
// //   Use passport.authenticate() as route middleware to authenticate the
// //   request.  If authentication fails, the user will be redirected back to the
// //   login page.  Otherwise, the primary route function function will be called,
// //   which, in this example, will redirect the user to the home page.
app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });



  // passport.use(new YahooStrategy({
  //     consumerKey: YAHOO_CONSUMER_KEY,
  //     consumerSecret: YAHOO_CONSUMER_SECRET,
  //     callbackURL: "http://127.0.0.1:3000/auth/yahoo/callback"
  //   },
  //   function(token, tokenSecret, profile, done) {
  //     // User.findOrCreate({ yahooId: profile.id }, function (err, user) {
  //       return done(err, user);
  //     }));
  //
  // app.get('/auth/yahoo',
  //   passport.authenticate('yahoo'));
  //
  // app.get('/auth/yahoo/callback',
  //   passport.authenticate('yahoo', { failureRedirect: '/login' }),
  //   function(req, res) {
  //     // Successful authentication, redirect home.
  //     res.redirect('/');
  //   });




app.get('/', function(request, response){
  response.render('/index.html')
})

// passport.use(new TwitterStrategy({
//     consumerKey: TWITTER_CONSUMER_KEY,
//     consumerSecret: TWITTER_CONSUMER_SECRET,
//     callbackURL: "http://www.localhost:3000/auth/twitter/callback"
//   },
//   function(token, tokenSecret, profile, done) {
//     console.log(profile);
//     // User.findOrCreate(..., function(err, user) {
//     //   if (err) { return done(err); }
//       done(null, user);
//     }));

// Redirect the user to Twitter for authentication.  When complete, Twitter
// will redirect the user back to the application at
//   /auth/twitter/callback
// app.get('/auth/twitter', passport.authenticate('twitter'));
//
// // Twitter will redirect the user to this URL after approval.  Finish the
// // authentication process by attempting to obtain an access token.  If
// // access was granted, the user will be logged in.  Otherwise,
// // authentication has failed.
// app.get('/auth/twitter/callback',
//   passport.authenticate('twitter', { successRedirect: '/',
//                                      failureRedirect: '/login' }));
app.get('/logout', function(request, response){
  request.logout();
  response.redirect('/');
});


app.listen(port, function(){
  console.log('listening on port ' + port);
});
module.exports = app;
