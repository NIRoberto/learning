import mongoose from "mongoose";

const Schema = mongoose.Schema;

const blogschema = new Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  {timestamps: true}
);

export default mongoose.model("blog", blogschema);
