const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    postId:{
        type:Number,
        required: true,
        unique: true
    },
    postTitle:{
        type:String,
        required: true
    },
    postName:{
        type:String,
        required: true
    },
    postDate:{
        type:Date,
        required: true
    },
    postContent:{
        type:String,
        required: true
    }
});

module.exports = mongoose.model("Post", postSchema);