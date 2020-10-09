import mongoose from "mongoose";

const Schema = mongoose.Schema;

const queriechema = new Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    fname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
    },
    subject: {
      type: String,
      required: true,
    },
    questions: {
      type: String,
      required: true,
    },
  },
  {timestamps: true}
);

export default mongoose.model("question", queriechema);
