import mongoose from "mongoose";

import commentcontrolle from "../models/blog-coment.js";
import joi from "@hapi/joi";

const schema = {
  email: joi.string().min(6).required().email(),
  comment: joi.string().min(6).max(10).required(),
};

export default class blogcontroller {
  static async find(req, res) {
    try {
      const comm = await commentcontrolle.find();
      res.status(201).json({
        message: "success",
        blogposts: comm,
      });
    } catch (err) {
      res.status(501).json({
        Error: err,
      });
    }
  }
  static async postOne(req, res) {
    // const postones = await blogcontrolle.post();
    const {error} = joi.validate(req.body, schema);
    if (error) {
      return res.status(404).json({
        message: error.details[0].message,
      });
    }
    const compot = new commentcontrolle({
      _id: new mongoose.Types.ObjectId(),
      email: req.body.email,
      comment: req.body.comment,
    });

    compot.save();
    // .select("_id title body")
    try {
      res.status(200).json({
        message: "create a comment post completed",
        comment: compot,
      });
    } catch (error) {
      res.status(500).json({
        message: "error",
        error: error.message,
      });
    }
  }
  static async getOne(req, res) {
    const id = req.params.id;
    const getones = await commentcontrolle.findById(id);
    try {
      console.log(getones);
      res.status(200).json({
        message: "success",
        blogp: getones,
      });
    } catch (error) {
      res.status(501).json({
        message: "invalid id number",
      });
    }
  }
  static async patchOne(req, res) {
    try {
      // const {error} = joi.validate(req.body, schema);
      // if (error) {
      //   return res.status(404).json({
      //     message: error.details[0].message,
      //   });
      // }
      const getone = await commentcontrolle.updateOne(
        {_id: req.params.id},
        {$set: {email: req.body.email, comment: req.body.comment}}
      );

      return res.status(200).json({
        message: "update was successfull done",
        updated: getone,
      });
    } catch (error) {
      return res.status(500).json({
        status: "err in update",
      });
    }
  }
  static async deleteOne(req, res) {
    const id = req.params.id;
    const deleteone = await commentcontrolle.remove({_id: id});
    try {
      res.status(200).json({
        message: "delete a comment was succesfull done!",
      });
    } catch (error) {
      res.status(500).json({
        message: "failed to delete",
      });
    }
  }
}
