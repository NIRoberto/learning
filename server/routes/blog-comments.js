import express from "express";
import mongoose from "mongoose";
// import blogautho from '../middleware/blog-auth.js';
import commentcontrollers from "../controllers/comment-controller.js";
import commentcontrolle from "../models/blog-coment.js";
//create a route
const router = express.Router();
//get all
router.get("/comments", commentcontrollers.find);

// create new comment
router.post("/create", commentcontrollers.postOne);

router.get("/comment/:commid", commentcontrollers.getOne);

//update one
router.patch("/update/:id", commentcontrollers.patchOne);
//delete one
router.delete("/deleteone/:id", commentcontrollers.deleteOne);
// module.exports=router;
export default router;
