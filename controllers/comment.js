const Comment = require("../models/Comment");

module.exports = {
  createComment: async (req, res) => {
    try {
      await Comment.create({
        comment: req.body.comment,
        
      });
      const comments=await Comment.find().sort({createdAt:"-1"}).lean();
      res.render("profile.ejs",{comments:comments,user: req.user})
      console.log("Comment has been added!");
     
    } catch (err) {
      console.log(err);
    }
  },
};