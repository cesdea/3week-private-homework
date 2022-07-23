const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    commentId: {
    type: Number,
    required: true,
    unique: true
  },
  commentDate: {
    type: Number,
    required: true
  },
  commentContent:{
    type:String,
    required:true
  }
});

module.exports = mongoose.model("Comment", comentSchema);