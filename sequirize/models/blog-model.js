const Sequelize = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "path/to/database.sqlite",
});
const Note = sequelize.define("blogpost", {
  title: Sequelize.STRING,
  body: Sequelize.STRING,
});
module.exports = sequelize.model("blog-post", Note);
