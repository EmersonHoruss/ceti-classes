import { SellSchema } from "../schemas/sell.schema.js"

export const SellModel = {
    getTotal(_detailSells) {
        let _total = 0
        for (let i = 0; i < _detailSells.length; i++) {
            const { _amount, _price } = _detailSells[i]
            _total += _amount * _price
        }
        return _total
    },

    async create(_date, _customerName, _customerDNI, _detailSells) {
        const _total = this.getTotal(_detailSells)
        const _sell = new SellSchema({
            _date,
            _total,
            _customerName,
            _customerDNI
        });

        return await _sell.save();
    },

    async get() {
        return await SellSchema.find()
    },

    async getOne(_id) {
        return await SellSchema.findById(_id).exec()
    }
}