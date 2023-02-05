import { DetailSellSchema } from "../schemas/detailSell.schema.js"
import mongoose from "mongoose";
const ObjectId = mongoose.Types.ObjectId

export const DetailSellModel = {
    async create(
        _amount,
        _price,
        _idProduct,
        _idSell
    ) {
        const _total = parseFloat(_price) * parseInt(_amount)
        const _detailSell = new DetailSellSchema({
            _amount,
            _total,
            _price,
            _idProduct,
            _idSell
        });
        return await _detailSell.save();
    },

    async getByIdSeller(_idSell) {
        return await DetailSellSchema.find({ _idSell: ObjectId(_idSell) })
    }
}