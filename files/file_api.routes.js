const route = require('express').Router();
const filelist=require("./model/file");
const auth = require("../auth.service");

route.use('/file/:userID/:folderID', auth.authenticateToken);

route.get('/file/:userID/:folderID', (req,res)=> {
    try{
        filelist.find({owner_id:req.params.userID,folder_id:req.params.folderID}, (err, result) => {
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

route.use('/file', auth.authenticateToken);

route.post("/file",async(req,res)=>{
    try{
        const fileList=new filelist((req.body)); 
        await fileList.save();
        res.send("Successfully inserted file into db");
    }catch(err){
        res.send(`${err} error`);
    }
});

route.use('/delete-file', auth.authenticateToken);


route.delete("/delete-file",async (req,res)=>{
    try{
       const result= await filelist.deleteOne({id:req.body.id, owner_id:req.body.user_id});
       if(result.deletedCount >0){
           res.send("deleted file from db");
       }
       else{
           res.send("unable to delete");
       }
    }catch(err){
        res.send(err);
    }
})

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