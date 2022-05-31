const express =require("express");
const app=express();
const mongoose=require("mongoose");

require("dotenv/config");


function customMiddleware(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    console.log("Welcome to my middleware");
    next();
}

app.use(express.json());

app.use(customMiddleware);



mongoose.connect(process.env.DB_CONNECTION_STRING,
    {useUnifiedTopology: true, useNewUrlParser:true}, 
    (req,res)=>{
        console.log("Connected to DataBase"); 
    }
);

app.listen(4000, () => {
    console.log("Started ...");
})
