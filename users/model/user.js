const mongoose=require("mongoose");

const user=new mongoose.Schema({
    id :{
        type: String,
        required: true,
    },
    name:{
        firstName:{
            type: String,
            required: true,
        },
        lastName:{
            type: String,
        }
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
   }
});

module.exports=mongoose.model("user",user);