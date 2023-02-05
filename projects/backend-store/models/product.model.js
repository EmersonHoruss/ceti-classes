import { ProductSchema } from "../schemas/product.schema.js"

export const ProductModel = {
  async create(_name, _amount, _price) {
    const entity = new ProductSchema({
      _name,
      _amount,
      _price
    });

    return await entity.save();
  },

  async get() {
    return await ProductSchema.find()
  },

  async addStock(_id, _addedAmount) {
    const _product = await ProductSchema.findById(_id)
    const _amount = _product._amount + parseInt(_addedAmount)

    return await ProductSchema.findByIdAndUpdate(
      _id,
      { $set: { _amount } },
      { new: true }
    );
  },

  async subtractStock(_id, _subtractedAmount) {
    const _product = await ProductSchema.findById(_id)

    const _amount = _product._amount - parseInt(_subtractedAmount)

    return await ProductSchema.findByIdAndUpdate(
      _id,
      { $set: { _amount } },
      { new: true }
    );
  },

  async getOne(_id) {
    return await ProductSchema.findById(_id)
  }
}
