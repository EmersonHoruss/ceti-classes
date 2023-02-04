import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    _amount: {
      type: Number,
      unique: false,
      required: true,
    },
    _total: {
      type: Number,
      unique: false,
      required: true,
    },
    _price: {
      type: Number,
      unique: false,
      required: true,
    },
    _idProduct: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      unique: false,
      required: true,
    },
    _idSell: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Sell",
      unique: false,
      required: true,
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const DetailSellSchema = mongoose.model("DetailSell", schema);