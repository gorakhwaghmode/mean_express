const express = require('express')
const bodyParser = require('body-parser');

var MongoClient = require('mongodb').MongoClient

const app = express()
let logs = Array()


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

app.get(
    '/calcv1/:num1/:num2',
    (req, res) => {
        console.log(req.params)
        res.send(`Addition of ${req.params['num1']} and ${req.params['num2']} is ${parseInt(req.params['num1']) + parseInt(req.params['num2'])} `)
    }
)

app.post(
    '/calcv2',
    (req, res) => {
        //console.log(req.body)

        let custRes = {}
        if (req.body.operation === '+') {
            custRes = {
                sts: 200,
                msg: 'addition',
                res: (parseInt(req.body.num1) + parseInt(req.body.num2))
            }
        } else {
            custRes = {
                sts: 400,
                msg: 'error',
                res: 0
            }
        }

        let logged = {
            [Date.now()]: custRes
        }
        logs.push(logged)
        console.log(logged)
        res.json(custRes)
    }
)

app.get(
    `/rvws`,
    (req, res) => {

        let rvws = [];
        rvws.push({
            strs: 1,
            rvr: 'xyz',
            rv: 'its good',
            rvDt: '12-8-1996'
        });
        rvws.push({
            strs: 3,
            rvr: 'pqr',
            rv: 'its really good',
            rvDt: '12-9-1999'
        });
        rvws.push({
            strs: 2,
            rvr: 'abc',
            rv: 'its fantastic',
            rvDt: '1-9-1999'
        });
        rvws.push({
            strs: 5,
            rvr: 'uvw',
            rv: 'its nice',
            rvDt: '10-12-1999'
        });

        res.json(rvws)
    }
)
//usnm : string
//pass : string

app.post(
    `/login`,
    
    (req,res)=>{
      
        
       MongoClient.connect('mongodb://localhost:27017/emp_detail', function (err, db) {
        if (err) throw err
        // db.collection('zxy').find().toArray(myobj,function (err, result) {
        //   if (err) throw err
      
        //   console.log(result)
        // })
        let custRes = {}
        db.collection('emp').findMany({"username":"gorakh"}, function (err, result) {
      if (err) throw err
      else{
         // console.log(req.body.usNm)
         // console.log(result.username)
        if (req.body.usNm === result.username ) {
            custRes = {
                sts: 200,
                msg: 'Login sucessfully',
                res: req.body.usNm
            }
                
        }
        else {
            custRes = {
                sts: 400,
                msg: 'error',
                res: 0
            }
      }
      res.json(custRes)
    }
      })
      })

        // let custRes = {}
        // if (req.body.usNm === 'gorakh' ) {
        //     custRes = {
        //         sts: 200,
        //         msg: 'Login sucessfully',
        //         res: req.body.usNm
        //     }
        //    // console.log(req.body.usNm)
        // } else {
        //     custRes = {
        //         sts: 400,
        //         msg: 'error',
        //         res: 0
        //     }
        // }
        // res.json(custRes)
    }
)



//var myinsrt = { "username": "admin", "password" : "654321"}

MongoClient.connect('mongodb://localhost:27017/emp_detail', function (err, db) {
  if (err) throw err
  // db.collection('zxy').find().toArray(myobj,function (err, result) {
  //   if (err) throw err

  //   console.log(result)
  // })
  db.collection('emp').findOne({"username":"mongoose"}, function (err, result) {
if (err) throw err

//console.log(result.username)
})
})




app.listen(
    3000,
    () => console.log('Example app listening on port 3000!')
)