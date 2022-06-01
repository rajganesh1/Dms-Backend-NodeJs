const route = require('express').Router();
const folderModel=require("./model/folder");
const fileModel=require("../files/model/file");

route.get('/folder', (req,res)=> {
    try{
        folderModel.find({}, (err, result) => {
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

route.post("/folder",async(req,res)=>{//post folder api
    try{
        const folderList=new folderModel((req.body)); //creatre instance for the model and save in db
        await folderList.save();
        res.send("Successfully inserted folder into db");
    }catch(err){
        res.send(`${err} error`);
    }
});

//moving files to another folder
route.put("/folder",(req,res)=>{//call back anony func..
    const updateFile=req.body;
    console.log("trying to update");
    try{
        fileModel.findOneAndUpdate({id:updateFile.fileId},{$set:{folder_id:updateFile.newId}},{upsert:true},
            (err,result)=>{
                if(err){
                    res.send(`err :${err}`);
                }
                else{
                    res.send("File has been moved to destination folder");
                }
            })
    }catch(err){
        res.send(`${err}test error`);
    }
})

route.delete("/folder/:userId/:folderId",(req,res)=>{
    try{
        folderModel.remove({owner_id:req.params.userId,id:req.params.folderId},(err,result)=>{
            if(err){
                res.send(`err:${err}`);
            }
            else{
                res.send('folder successfully deleted');
            }
        });
    }catch(err){
        res.send(err);
    }
})



module.exports = route;


// {
//     "id":"folder 1",
//     "name": "myFolder",
//     "owner_id":"Raj Ganesh",
//     "createdAt":"31-05-2022"
// }