const route = require('express').Router();
const filelist=require("./model/file");


route.get('/file', (req,res)=> {
    try{
        console.log("test");
        filelist.find({}, (err, result) => {
            if (err) {
              res.send(err);
            } else {
              res.send(result);
            }
        });
    }catch(err){
        res.send(`${err}test error`);
    }
})

route.post("/file",async(req,res)=>{
    console.log("trying to post");
    try{
        const fileList=new filelist((req.body)); 
        await fileList.save();
        res.send("Successfully insert into db");
    }catch(err){
        res.send(`${err} error`);
    }
});

module.exports = route;