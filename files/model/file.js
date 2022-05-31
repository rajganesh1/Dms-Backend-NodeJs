const mongoose=require("mongoose");

const file=new mongoose.Schema({
    // ownerId:[{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'user',
    // }],
    title:{
        type: String,
        required: true,
    },
    content:{
        type: String,
        required: true,
    },
    createdAt:{
        type: String,
    },
    lastModified: {
        type: String,
    }
});

module.exports=mongoose.model("file",file);