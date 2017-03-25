  const express = require('express')
const app = express()
const router = express.Router();
const bodyParser = require('body-parser');
const template = require('pug');
const path = __dirname + '/views/';

app.set('view engine', 'pug');
app.set('views', './views')


// Fire database
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/nouvelleecole');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Successfully connected to database');
});

// parse request bodies (req.body)
app.use(bodyParser.urlencoded({ extended: true }));

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.render('index');
});

router.get("/about",function(req,res){
  res.sendFile(path + "about.pug");
});

router.get("/contact",function(req,res){
  res.sendFile(path + "contact.html");
});

app.use("/",router);

app.use("*",function(req,res){
  res.sendFile(path + "404.html");
});

app.listen(3000, function () {
  console.log('Listening on port 3000!')
})
