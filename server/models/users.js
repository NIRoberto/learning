import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userchema = new Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {timestamps: true}
);

export default mongoose.model("user", userchema);
