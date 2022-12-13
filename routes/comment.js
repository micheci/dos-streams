const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const commentController=require("../controllers/comment")


router.post("/createComment",commentController.createComment);

module.exports=router;