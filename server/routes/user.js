import express from "express";
import usercontroller from "../controllers/user-controller.js";

//create a router for signup

const router = express.Router();
router.get("/users", usercontroller.find);

//signup logic when you want to login
router.post("/signup", usercontroller.post);
// login route
router.post("/login", usercontroller.postOne);
router.delete("/userid/:uid", usercontroller.delete);
export default router;
