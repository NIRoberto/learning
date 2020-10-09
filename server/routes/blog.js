import express from "express";
// import blogautho from "../middleware/blog-auth.js";
import blogcontrollers from "../controllers/blog-controller.js";

//create a route
const router = express.Router();
//get all
router.get("/blogs", blogcontrollers.find);

// create new post
router.post("/post", blogcontrollers.post);

router.get("/blog/:blogpid", blogcontrollers.getOne);

//update one
router.patch("/update/:id", blogcontrollers.patch);

//delete one
router.delete("/delete/:id", blogcontrollers.delete);
// module.exports=router;
export default router;
