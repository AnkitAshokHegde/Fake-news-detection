const express = require('express');
const cors = require("cors");
require('./config');
const app = express();

const path = require('path');
const { json } = require('express');

const mongodb = require('mongodb');
//app.use(express.static(path.join(__dirname, 'public')));app.use(express.json());
app.use(cors());
app.post("/", (req, resp) => {
    let req_json;
    let req_data="";
    req.on('data',(data)=>{
        req_data+=String(data);
    })
    req.on('end',(e)=>{
        req_json=JSON.parse(req_data)
        console.log(req_json.news_tit)
        console.log(req_json.news_con)
    })
    mongodb.MongoClient.connect("mongodb://localhost:27017/").then(con=>{
        let actual_db = con.db("News")
        actual_db.collection("news").insertOne({newsId:req_json.news_tit, newContent:req_json.news_con, status:0})
     /*   console.log( actual_db.collection("news").findOne({}).then(
            res=>{
                console.log(res)
            }
        ))*/
    });
});



app.get("/", (req, res, next) => {
    
});

app.listen(5000);