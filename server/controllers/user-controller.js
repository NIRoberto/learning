import mongoose from "mongoose";
import bcrypt from "bcrypt";
import users from "../models/users.js";
import jwt from "jsonwebtoken";
import joi from "@hapi/joi";
import dotenv from "dotenv";
dotenv.config();

const schema = {
  email: joi.string().min(6).required().email(),
  password: joi.string().min(6).max(10).required(),
};

export default class usercontrollers {
  static async find(req, res) {
    const findalluser = await users.find();

    try {
      res.status(200).json({
        users: findalluser,
      });
    } catch (error) {
      res.status(501).json({
        error: error.message,
      });
    }
  }
  //signup for new user
  static async post(req, res) {
    // validating user
    const {error} = joi.validate(req.body, schema);
    if (error) {
      return res.status(409).json({
        message: error.details[0].message,
      });
    }
    //check if exist
    const emailexist = await users.findOne({email: req.body.email});
    if (emailexist) {
      return res.status(409).json({
        message: "email already exist",
      });
    }

    //hide a password
    const salt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(req.body.password, salt);

    const user = users({
      _id: new mongoose.Types.ObjectId(),
      email: req.body.email,
      password: hashedpassword,
    });
    const saveuser = await user.save();

    try {
      const token = jwt.sign(
        {
          _id: new mongoose.Types.ObjectId(),
          email: req.body.email,
        },
        process.env.tokenkeys
      );
      res.header("auth-token", token);
      res.status(201).json({
        message: "user created sucessful and  logged in",
        // user: saveuser,
        token: token,
      });
    } catch (error) {
      res.status(404).json({
        error: error.message,
      });
    }
  }
  //login
  static async postOne(req, res) {
    // validating user
    const {error} = joi.validate(req.body, schema);
    if (error) {
      return res.status(400).json({
        message: error.details[0].message,
      });
    }
    //check if exist
    const user = await users.findOne({email: req.body.email});
    if (!user) {
      return res.status(400).json({
        message: "email not found",
      });
    }
    const validpassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validpassword) {
      return res.status(400).json({
        message: "password is invalid",
      });
    }
    const token = jwt.sign(
      {
        _id: new mongoose.Types.ObjectId(),
        email: req.body.email,
      },
      process.env.tokenkey
    );
    res.header("auth-token", token);
    try {
      res.status(200).json({
        message: "logged in !",
        token: token,
      });
    } catch (error) {
      res.status(404).json({
        message: "failed to login try another way",
      });
    }
  }
  static async delete(req, res) {
    //check if exist

    try {
      const deleteone = await users.deleteOne({_id: req.params.uid});
      const userid = users.deleteOne({_id: req.params.uid});

      if (!userid) {
        return res.status(404).json({
          message: " id not found",
        });
      } else {
        return res.status(200).json({
          message: "user deleted successful",
        });
      }
    } catch (error) {
      res.status(404).json({
        error: error.message,
      });
    }
  }
}
