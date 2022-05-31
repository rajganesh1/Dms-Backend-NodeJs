const route = require('express').Router();
const userlist=require("./model/user");


route.get('/user', (req,res)=> {
    try{
        userlist.find({}, (err, result) => {
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

route.post("/user",async(req,res)=>{
    try{
        const userList=new userlist((req.body)); 
        await userList.save();
        res.send("Successfully inserted user into db");
    }catch(err){
        res.send(`${err} error`);
    }
});

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