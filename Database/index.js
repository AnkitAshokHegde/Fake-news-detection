const express = require("express");
const cors = require("cors");

require("./db/config");
const NewsModel = require("./db/NewsModel");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/newsData", async (req, resp) => {
    // const NewsData = NewsModel(req.body);        
    // console.log(req);
    // const result = await NewsData.save();
    // resp.send(result);

    const NewsData = await NewsModel.find();

    if (NewsData.length > 0) {
        resp.send(NewsData);
    }
    else {
        resp.send({ result: "No news articles yet" });
    }
});

app.get("/", async (req, resp) => {
    // const NewsData = NewsModel(req.body);        
    // console.log(req);
    // const result = await NewsData.save();
    // resp.send(result);

    resp.send("Hi");
});


const port = 5001;

app.listen(port, () => {
    console.log("Server is running on the port number : " + port);
});