const route = require('express').Router();
const fileModel=require("../files/model/file");
const folderModel=require("../folders/model/folder");


//will send all files in the root directory of the users 
route.get('/home/:userid', async(req,res)=> {
    try{
        const files = await fileModel.find({owner_id : req.params.userid, folder_id: { $exists: false}});
        const folders = await folderModel.find({owner_id : req.params.userid});
        res.send([...files, ...folders]);
    }catch(err){
        res.send(`${err}test error`);
    }
})


//will send all the files present inside the folder for a user.
route.get('/home/:userid/:folderid', async(req,res)=> {
    try{
        const files = await fileModel.find({owner_id : req.params.userid,folder_id : req.params.folderid});
        res.send(files);
    }catch(err){
        res.send(`${err}test error`);
    }
})

module.exports=route;