const express = require("express");
const Sequelize = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "path/to/database.sqlite",
});
const Note = sequelize.define("blogpost", {
  title: Sequelize.STRING,
  body: Sequelize.STRING,
});

//get all router
const router = express.Router();
router.get("/", (req, res) => {
  Note.findAll().then((notes) => res.status(200).json(notes));
});
//create one blog post

router.post("/notes", function (req, res) {
  Note.create({title: req.body.title, body: req.body.body}).then(function (
    note
  ) {
    res.json(note);
  });
});
//get one blog post
router.get("/notes/:id", (req, res) => {
  Note.findByPk(req.params.id).then((note) => res.status(200).json(note));
});
// update blog post
router.put("/notes/:id", function (req, res) {
  Note.findByPk(req.params.id).then(function (note) {
    note
      .update({
        title: req.body.title,
        body: req.body.body,
      })
      .then((note) => {
        res.status(200).json(note);
      });
  });
});

// delete one blog post
router.delete("/notes/:id", function (req, res) {
  Note.findByPk(req.params.id)
    .then(function (note) {
      note.destroy();
    })
    .then((note) => {
      res.status(200).json({
        message: "delete blog post done successfull",
      });
    })
    .catch((err) => {
      res.status(404).json({
        message: "invalid id ",
      });
    });
});
module.exports = router;
