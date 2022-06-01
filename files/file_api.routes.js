const route = require('express').Router();
const filelist=require("./model/file");


route.get('/file', (req,res)=> {
    try{
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
    try{
        const fileList=new filelist((req.body)); 
        await fileList.save();
        res.send("Successfully inserted file into db");
    }catch(err){
        res.send(`${err} error`);
    }
});

module.exports = route;



// {
//     "id":"5005",
//     "name": "file number 1 ",
//     "folder_id":"1000",
//     "owner_id": "102",
//     "extension": ".pdf",
//     "content": "This is the first file created for user2(102) without folder",
//     "createdAt":"31-05-2022"
// }