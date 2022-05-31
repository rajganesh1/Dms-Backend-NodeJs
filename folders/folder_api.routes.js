const route = require('express').Router();
const folderlist=require("./model/folder");


route.get('/folder', (req,res)=> {
    try{
        folderlist.find({}, (err, result) => {
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

route.post("/folder",async(req,res)=>{
    try{
        const folderList=new folderlist((req.body)); 
        await folderList.save();
        res.send("Successfully inserted folder into db");
    }catch(err){
        res.send(`${err} error`);
    }
});

module.exports = route;


// {
//     "id":"folder 1",
//     "name": "myFolder",
//     "owner_id":"Raj Ganesh",
//     "createdAt":"31-05-2022"
// }