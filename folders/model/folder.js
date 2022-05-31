const mongoose=require("mongoose");

const folder=new mongoose.Schema({
    id :{
        type: String,
        required: true,
    },
    name:{
        type: String,
        required: true,
    },
    owner_id:{
        type:String,
        required: true,
    },
    createdAt:{
        type: String,
        required: true,
    }
});

module.exports=mongoose.model("folder",folder);