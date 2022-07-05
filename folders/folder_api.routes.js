const route = require('express').Router();
const folderModel=require("./model/folder");
const fileModel=require("../files/model/file");
const auth = require("../auth.service");

route.use('/folder/:userID', auth.authenticateToken);

route.get('/folder/:userID', (req,res)=> {
    try{
        folderModel.find({id:req.params.userID}, (err, result) => {
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

route.use('/folder', auth.authenticateToken);

route.post("/folder",async(req,res)=>{
    try{
        if(req.body.owner_id == undefined){
            res.send(`${err} OwnerID missing`);
        }
        const folderList=new folderModel((req.body)); 
        await folderList.save();
        res.send("Successfully inserted folder into db");
    }catch(err){
        res.send(`${err} error`);
    }
});

route.use('/folder', auth.authenticateToken);

//moving files to another folder
route.put("/folder",(req,res)=>{
    const updateFile=req.body;
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

route.use('/delete-folder', auth.authenticateToken);

route.delete("/delete-folder",async (req,res)=>{
    try{
       const result= await folderModel.deleteOne({id:req.body.id, owner_id:req.body.user_id});
       if(result.deletedCount >0){
           res.send("deleted folder from db");
       }
       else{
           res.send("unable to delete");
       }
    }catch(err){
        res.send(err);
    }
})

//Raj Ganesh july 5 2022


module.exports = route;


// {
//     "id":"1000",
//     "name": "myFolder",
//     "owner_id":"Raj Ganesh",
//     "createdAt":"31-05-2022"
// }