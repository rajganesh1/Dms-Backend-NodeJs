const mongoose=require("mongoose");

const file=new mongoose.Schema({
    id:{
        type:String,
        required: true,
    },
    name:{
        type:String,
        required: true,
    },
    folder_id:{
        type:String,
        required: true,
    },
    owner_id:{
        type:String,
        required: true,
    },
    extension:{
        type: String,
        required: true,
    },
    content:{
        type: String,
        required: true,
    },
    createdAt:{
        type: String,
        required: true,
    }
});

module.exports=mongoose.model("file",file);