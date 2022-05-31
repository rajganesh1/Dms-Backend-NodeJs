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
//     "id":"101F",
//     "name": "file number 6",
//     "folder_id":"folder 1",
//     "owner_id": "Raj Ganesh",
//     "extension": ".docs",
//     "content": "This is the sixth file created",
//     "createdAt":"31-05-2022"
// }