import { SellModel } from "../models/sell.model.js";
import { DetailSellModel } from "../models/detailSell.model.js";
import { ProductModel } from "../models/product.model.js"

export default {
    create: async (req, res) => {
        try {
            const { _date, _customerName, _customerDNI, _detailSells } = req.body;

            const _sell = await SellModel.create(_date, _customerName, _customerDNI, _detailSells)
            const _idSell = _sell._id
            const _savedDetailSells = []

            for (let i = 0; i < _detailSells.length; i++) {
                const { _amount, _price, _idProduct } = _detailSells[i];
                const _detailSell = await DetailSellModel.create(_amount, _price, _idProduct, _idSell)
                _savedDetailSells.push(_detailSell)
                await ProductModel.subtractStock(_idProduct, _amount)
            }

            res.json({
                _id: _sell._id,
                _date: _sell._date,
                _total: _sell._total,
                _customerName: _sell._customerName,
                _customerDNI: _sell._customerDNI,
                _detailSells: _savedDetailSells
            });
        } catch (error) {
            return res.status(500).json(error);
        }
    },

    get: async (req, res) => {
        try {
            const _sells = await SellModel.get()
            return res.json(_sells)
        } catch (error) {
            return res.status(500).json(error)
        }
    },

    getOne: async (req, res) => {
        try {
            const _id = req.params._id
            const { _date, _total, _customerName, _customerDNI } = await SellModel.getOne(_id)

            const _detailSells = await DetailSellModel.getByIdSeller(_id)

            return res.json({
                _id,
                _date,
                _total,
                _customerName,
                _customerDNI,
                _detailSells
            })
        } catch (error) {
            return res.status(500).json(error)
        }
    }
};
