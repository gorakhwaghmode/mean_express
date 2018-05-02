var express = require("express");
var bodyParser = require("body-parser");

var app=express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var MongoClient = require('mongodb').MongoClient
var ObjectId=require('mongodb').ObjectId

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

//list of clients
app.get("/registration",function(req,res){
    MongoClient.connect('mongodb://localhost:27017/reforma',function(err,db){
        
    if (err) throw err
    else{

        db.collection('clientReg').find().toArray(function(err,result){
            if(err) throw err
            else{
                if(result){
                    res.json(result)
                        console.log(result)

                }else{
                    console.log(err)
                }
            }
        })
    }
})
});

//For add a client
app.post("/reg",function(req,res){

    MongoClient.connect('mongodb://localhost:27017/reforma',function(err,db){
        if (err) throw err
        else{

            db.collection('clientReg').insertOne(req.body,function(err,result){
                if(err) throw err
                else{
                    if(result){
                        res.json(result)
                            console.log(result)

                    }else{
                        console.log(err)
                    }
                }
            })
        }
    })
});

//delete a client
app.post(
    '/del',
    (req, res) => {
        let custRes = {}
        MongoClient.connect('mongodb://localhost:27017/reforma', function (err, db) {
          if (err) throw err   
          else{
            db.collection('clientReg').remove({"_id":new ObjectId(req.body._id)},function (err, result) {
                if (err) throw err
                else{   
                    if (result) {
                       
                            custRes = {
                                        sts: 200,
                                        msg: 'Successful',
                                        res: result
                                }                     
                    }
                    else{
                        console.log(err)
                        custRes = {
                                    sts: 400,
                                    msg: 'error',
                                    res: 0
                                }                                       
                    }
        
                }
                res.json(custRes)
            }) 
        }
      })
  });

  //Select One client

  app.post(
    '/selected',
    (req, res) => {
        let custRes = {}
        MongoClient.connect('mongodb://localhost:27017/reforma', function (err, db) {
          if (err) throw err   
          else{
            db.collection('clientReg').findOne({"_id":new ObjectId(req.body._id)},function (err, result) {
                if (err) throw err
                else{
                       
                    if (result) {
                        console.log(result)     
                    }
                    else{
                        console.log(err)                                   
                    }
        
                }
                res.json(custRes)
            }) 
        }
      })
  });

  // for update 
  app.put(
    '/update',
    (req, res) => {
        let custRes = {}
             console.log(req.body)

        MongoClient.connect('mongodb://localhost:27017/reforma', function (err, db) {
          if (err) throw err
   

          else{
            db.collection('clientReg').update({"_id":new ObjectId(req.body._id)},{$set:{"usNm":req.body.usNm,"femail":req.body.femail,"phoneNo":req.body.phoneNo,"pass":req.body.pass}},function (err, result) {
                if (err) throw err
                else{
                    console.log(result)    
                    if (result) {
                       
                            custRes = {
                                        sts: 200,
                                        msg: 'Successful',
                                        res: result
                                }                     
                    }
                    else{
                        console.log(err)
                        custRes = {
                                    sts: 400,
                                    msg: 'error',
                                    res: 0
                                }                                       
                    }
        
                }
                res.json(custRes)
            }) 
        }
      })
  })


app.listen(
    3000,
    () => console.log('Example app listening on port 3000!')
)