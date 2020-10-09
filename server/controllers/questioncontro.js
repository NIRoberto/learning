import mongoose from "mongoose";
import quetioncontroller from "../models/queries.js";
import joi from "@hapi/joi";

const schema = {
  fname: joi.string().min(6).max(15).required(),
  subject: joi.string().min(3).max(9).required(),
  email: joi.string().min(6).required().email(),
  questions: joi.string().min(10).max(100).required(),
};

export default class quetioncontrolle {
  static async find(req, res) {
    try {
      const quest = await quetioncontroller.find();
      res.status(200).json({
        message: "All question",
        queries: quest,
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
    const queriess = new quetioncontroller({
      _id: new mongoose.Types.ObjectId(),
      fname: req.body.fname,
      email: req.body.email,
      subject: req.body.subject,
      questions: req.body.questions,
    });
    const quest = await queriess.save();
    try {
      res.status(201).json({
        message: "You had successfull add this question",
        questio: quest,
      });
    } catch (error) {
      res.status(400).json({
        error: error.message,
      });
    }
  }
  static async delete(req, res) {
    const id = req.params.id;

    try {
      const delet = await quetioncontroller.deleteOne({_id: id});
      res.status(200).json({
        message: "question was deleted successfull",
      });
    } catch (error) {
      res.json(404).json({
        message: error.message,
      });
    }
  }
}
