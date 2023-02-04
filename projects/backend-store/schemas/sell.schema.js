import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    _date: {
      type: Date,
      unique: false,
      required: true,
    },
    _total: {
      type: Number,
      unique: false,
      required: true,
    },
    _customerName: {
      type: String,
      unique: false,
      required: true,
    },
    _customerDNI: {
      type: String,
      unique: false,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const SellSchema = mongoose.model("Sell", schema);