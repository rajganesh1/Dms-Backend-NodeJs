const route = require('express').Router();
const usermodel=require("./model/user");


route.get('/user', (req,res)=> {
    try{
        usermodel.find({}, (err, result) => {
            if (err) {
              res.send(err);
            } else {
              res.send(result);
            }
        });
    }catch(err){
        res.send(`${err} error`);
    }
})

route.post("/user",async(req,res)=>{
    try{
        const userModel=new usermodel((req.body)); 
        await userModel.save();
        res.send("Successfully inserted user into db");
    }catch(err){
        res.send(`${err} error`);
    }
});

route.delete("/user/:userId",(req,res)=>{
    try{
        usermodel.remove({id:req.params.userId},(err,result)=>{
            if(err){
                res.send(`err:${err}`);
            }
            else{
                res.send('user successfully deleted');
            }
        });
    }catch(err){
        res.send(err);
    }
})

//user login
route.get('/login/:emailId/:password',async(req,res)=>{
    try{
        const userID=await usermodel.findOne({email:req.params.emailId,password:req.params.password});
        res.send(userID.id);
    }catch(err){
        res.send(`${err} error`);
    }
})

module.exports = route;



// {
//     "id":"Raj Ganesh",
//     "name": {
//         "firstName":"Raj",
//         "lastName":"Ganesh"
//     },
//     "email":"rajganesh111200@gmail.com",
//     "password":"My name is RajGanesh"
// }