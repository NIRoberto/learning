import mongoose from "mongoose";
import blogmodel from "../models/blogss.js";
import joi from "@hapi/joi";

const schema = {
  title: joi.string().min(6).max(15).required(),
  body: joi.string().min(10).max(100).required(),
};

export default class blogcontroller {
  static async find(req, res) {
    try {
      const blo = await blogmodel.find();
      res.status(200).json({
        message: "success",
        blogposts: blo,
      });
    } catch (error) {
      res.status(404).json({
        error: error.message,
      });
    }
  }
  static async post(req, res) {
    const {error} = joi.validate(req.body, schema);
    if (error) {
      return res.status(400).json({
        message: error.details[0].message,
      });
    }
    const blogpot = new blogmodel({
      _id: new mongoose.Types.ObjectId(),
      title: req.body.title,
      body: req.body.body,
    });

    blogpot.save();
    // .select("_id title body")
    try {
      res.status(201).json({
        message: "create a blog post completed",
        data: blogpot,
      });
    } catch (error) {
      res.status(400).json({
        message: "error",
        error: error.message,
      });
    }
  }

  static async getOne(req, res, next) {
    const id = req.params.blogpid;

    try {
      const geton = await blogmodel.findById(id);
      // console.log(geton);
      res.status(200).json({
        message: "get one",
        data: geton,
      });
    } catch (error) {
      res.status(404).json({
        message: "invalid id number",
      });
    }
  }
  static async patch(req, res) {
    const id = req.params.id;
    const getone = await blogmodel.updateOne(
      {_id: id},
      {$set: {title: req.body.title, body: req.body.body}}
    );
    try {
      res.status(200).json({
        message: "update blog post was successfull done",
      });
    } catch (error) {
      res.status(404).json({
        error: error.message,
      });
    }
  }
  static async delete(req, res, next) {
    const id = req.params.id;
    try {
      const deleteone = await blogmodel.deleteOne({_id: id});
      res.status(200).json({
        message: "delete  a blog post was succesfull done!",
      });
      next();
    } catch (error) {
      res.status(404).json({
        error: error.message,
      });
    }
  }
}
