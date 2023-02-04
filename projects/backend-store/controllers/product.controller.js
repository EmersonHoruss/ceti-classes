import { ProductModel } from "../models/product.model.js";

export default {
  create: async (req, res) => {
    try {
      const { _name, _amount, _price } = req.body;

      const _savedProduct = await ProductModel.create(_name, _amount, _price)

      res.json(_savedProduct);
    } catch (error) {
      return res.status(500).json(error);
    }
  },

  read: async (req, res) => {
    try {
      const _entities = await ProductModel.get()
      return res.json(_entities);
    } catch (error) {
      return res.status(500).json(error)
    }
  },

  addStock: async (req, res) => {
    try {
      const { _id, _addedAmount } = req.body;

      const _savedEntity = await ProductModel.addStock(_id, _addedAmount);

      res.json(_savedEntity);
    } catch (error) {
      res.status(500).json(error)
    }
  },
};