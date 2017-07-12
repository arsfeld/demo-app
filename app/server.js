var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/views/';

const MongoClient = require('mongodb').MongoClient

var db_host = process.env.DB_HOST || 'localhost';

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});

router.post('/quotes', (req, res) => {
  db.collection('quotes').save(req.body, (err, result) => {
    if (err) return console.log(err)

    console.log('saved to database')
    res.redirect('/')
  })
})

app.use("/",router);

app.use("*",function(req,res){
  res.sendFile(path + "404.html");
});


MongoClient.connect('mongodb://' + db_host + ':27017/animals', (err, database) => {
    // ... start the server
    app.listen(process.env.PORT || 3000,function(){
      console.log("Live at Port 3000");
    });
});
