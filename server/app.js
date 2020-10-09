import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
// import dotenv from "dotenv";
import commentrouter from "./routes/blog-comments.js";

// import bodyParser from 'body-parser';
import blogrouter from "./routes/blog.js";
import questionrouter from "./routes/question.js";
import userrouter from "./routes/user.js";

//create connection to mangodb
//listening for the response
const dbURI = `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@blog-db.bj3ci.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;
mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
const db = mongoose.connection;
db.on("open", () => {
  console.log("db connected");
});
db.on("error", () => {
  console.log("error in connecting database");
});

//setup express app
const app = express();
//setup morgan
app.use(morgan("dev"));
// app.use(bodyParser.urlencoded({extended:false}));
// app.use(bodyParser.json());
app.use(express.json());
// creating a routes
app.use("/api/v1/", blogrouter);
app.use("/api/v1/", questionrouter);
app.use("/api/v1/", userrouter);
app.use("/api/v1/", commentrouter);

//  app.use('/question',questionrouter);

// listen for the request
app.listen(5002, () => {
  console.log("app is listening fr the request on the server ");
});
export default app;
