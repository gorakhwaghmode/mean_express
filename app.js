const express = require('express')
const bodyParser = require('body-parser');
const app = express()
let logs = Array()

var MongoClient = require('mongodb').MongoClient

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use((req, res, next) => {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.get(
    '/',
    (req, res) => res.send('Hello World!')
)


var myinsrt = { "username": "mongoose", "password" : "meow"}

//var myobj = { name: "Company Inc", address: "Highway 37" };

MongoClient.connect('mongodb://localhost:27017/emp_detail', function (err, db) {
  if (err) throw err
  // db.collection('emp').find().toArray(myobj,function (err, result) {
  //   if (err) throw err

  //   console.log(result.username)
  // })
  db.collection('emp').insertOne(myinsrt,function (err, result) {
if (err) throw err

console.log(result)
})
})


app.listen(
    3000,
    () => console.log('Example app listening on port 3000!')
)