const Uuid = require('uuid');
const route = require('express').Router();
const usermodel=require("./model/user");
const bcrypt=require('bcrypt');
const saltRounds=10;


route.post("/create-user",async(req,res)=>{
    try{
        const uuidv4=Uuid.v4();
        req.body.id=uuidv4;
        req.body.password = bcrypt.hashSync(req.body.password, saltRounds);
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
        const dbpass = await usermodel.findOne({email:req.params.emailId});
        const isValid = await bcrypt.compare(req.params.password, dbpass.password);
        if(!isValid){
            res.sendStatus(403);
        }
        else{
            res.send({ id: dbpass.id});
        }
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