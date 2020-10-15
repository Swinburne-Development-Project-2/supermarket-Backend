
//Getting the modules
const express = require("express");
const app = express();
// to make api calls 
const cors = require('cors'); 
// For our dot environmnet
const dotenv = require('dotenv');
// var login = require('./api/users/login');
const session = require('express-session');
const flash = require('connect-flash');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
dotenv.config();



//To Send data to our backend when we get data from our api
app.use(cors());
//To be able send it in Json format
app.use(express.json());
//To not send any form data
app.use(express.urlencoded({extended:false}));
//express session
app.use(session({
  secret : 'secret',
  resave : true,
  saveUninitialized : true
 }));
 //use flash
 app.use(flash());
 app.use((req,res,next)=> {
   res.locals.success_msg = req.flash('success_msg');
   res.locals.error_msg = req.flash('error_msg');
   res.locals.error  = req.flash('error');
 next();
 })
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


const userRouter = require("./api/users/user.router");

// userRouter.post('/register',login.register);
// userRouter.post('/login',login.login);

// Change the URL from api/users to /home
app.use("/home", userRouter);
const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log("server up and running on PORT :" , port);
});
