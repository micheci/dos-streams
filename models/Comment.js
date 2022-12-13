const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  comment: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    expires: 60 ,
    
    default: Date.now,
  },
  expireAt: {
    type: Date,
    expires: 11,
    default: Date.now
}

  
});

module.exports = mongoose.model("Comment", CommentSchema);