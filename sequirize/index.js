const express = require("express");
const Sequelize = require("sequelize");
const blogrouter = require("./routes/blog-post");
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "path/to/database.sqlite",
});
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

const app = express();

const Note = sequelize.define("blogpost", {
  title: Sequelize.STRING,
  body: Sequelize.STRING,
});
//create one blog post
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.use("/", blogrouter);

const port = 3000;
app.listen(port, () => console.log(`notes-app listening on port ${port}!`));
