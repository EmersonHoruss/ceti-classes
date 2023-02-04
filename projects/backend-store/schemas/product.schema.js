import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    _name: {
      type: String,
      unique: true,
      required: true,
    },
    _amount: {
      type: Number,
      unique: false,
      required: true,
    },
    _price: {
      type: Number,
      unique: false,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const ProductSchema = mongoose.model("Product", schema);