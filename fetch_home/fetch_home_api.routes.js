const route = require('express').Router();
const fileModel=require("../files/model/file");
const folderModel=require("../folders/model/folder");
const userModel=require("../users/model/user");


//will send all files in the root directory of the users 
route.get('/home/:userid', async(req,res)=> {
    try{
        const files = await fileModel.find({owner_id : req.params.userid, folder_id: '1000'});
        const folders = await folderModel.find({owner_id : req.params.userid});
        console.log(...files); [1,2,3,4] 
        res.send([...files, ...folders]);//merge 2 array into 1 final spreaded array
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
        res.send(`${err} error`);
    }
})



module.exports=route;