import express from "express";
// import mongoose from "mongoose";
// import queries from "../models/queries.js";
import questioncontroller from "../controllers/questioncontro.js";
// import blogauth from "../middleware/blog-auth.js";
//create a route
const router = express.Router();
//get all
router.get("/questions", questioncontroller.find);

//create new question
router.post("/create", questioncontroller.post);

//delete one
router.delete("/deleteone/:id", questioncontroller.delete);
// module.exports=router;e
export default router;
