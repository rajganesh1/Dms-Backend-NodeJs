const express =require("express");
const app=express();
const mongoose=require("mongoose");

const fileAPI = require('./files/file_api.routes');
const userAPI= require('./users/user_api.routes');
const folderAPI= require('./folders/folder_api.routes');
const homeAPI= require('./fetch_home/fetch_home_api.routes');

require("dotenv/config");

function customMiddleware(req, res, next) {
    console.log("Welcome to my middleware");
    next();
}

app.all('*', function(req, res,next) {
    let responseSettings = {
        "AccessControlAllowOrigin": req.headers.origin,
        "AccessControlAllowHeaders": "Content-Type,X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5,  Date, X-Api-Version, X-File-Name",
        "AccessControlAllowMethods": "POST, GET, PUT, DELETE, OPTIONS",
        "AccessControlAllowCredentials": true
    };

    res.header("Access-Control-Allow-Credentials", responseSettings.AccessControlAllowCredentials);
    res.header("Access-Control-Allow-Origin",  responseSettings.AccessControlAllowOrigin);
    res.header("Access-Control-Allow-Headers", (req.headers['access-control-request-headers']) ? req.headers['access-control-request-headers'] : "x-requested-with");
    res.header("Access-Control-Allow-Methods", (req.headers['access-control-request-method']) ? req.headers['access-control-request-method'] : responseSettings.AccessControlAllowMethods);

    if('OPTIONS' == req.method){
        res.send(200);
    }
    else{
        next();
    }
});

app.use(express.json());

app.use(customMiddleware);

app.use('/v1',fileAPI);

app.use('/v1',userAPI);

app.use('/v1',folderAPI);

app.use('/v1',homeAPI)

mongoose.connect(process.env.DB_CONNECTION_STRING,
    {useUnifiedTopology: true, useNewUrlParser:true}, 
    (req,res)=>{
        console.log("Connected to DataBase"); 
    }
);

app.listen(6002, () => {
    console.log("Started ...");
})
    
