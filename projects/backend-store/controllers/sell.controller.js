// import Entity from "../models/sell.model.js";
// import DetailSellModel from "../models/detailSell.model.js";
// import ProductModel from "../models/product.model.js"

// export default {
//   create: async (req, res) => {
//     try {
//       const { _date, _customerName, _customerDNI, _detailSells } = req.body;
//       const _total = getTotal(_detailSells)
//       const _sell = new Entity({
//         _date,
//         _total,
//         _customerName,
//         _customerDNI
//       });

//       const _savedSell = await _sell.save();




//       const _savedDetailSells = []
//       for (let i = 0; i < _detailSells.length; i++) {
//         const { _amount, _price, _idProduct } = _detailSells[i];
//         const _total = _amount * _price
//         const _detailSell = new DetailSellModel({
//           _amount,
//           _total,
//           _price,
//           _idProduct,
//           _idSell: _savedSell._id
//         });
//         const _savedDetaillSell = await _detailSell.save()
//         _savedDetailSells.push(_savedDetaillSell);

//         // const product = 
//       }

//       res.status(200).json({
//         _id: _sell._id,
//         _date: _sell._date,
//         _total: _sell._total,
//         _customerName: _sell._customerName,
//         _customerDNI: _sell._customerDNI,
//         _detailSells: _savedDetailSells
//       });
//     } catch (error) {
//       console.log(error);
//       return res.status(500).json(error);
//     }
//   },

//   read: async (req, res) => {
//     const _entities = await Entity.find();
//     return res.json(_entities);
//   },

//   readOne: async (req, res) => {
//     const _id = req.params._id
//     const _entity = await Entity.findById(_id)
//     return res.json(_entity);
//   }
// };

// function getTotal(_list) {
//   let total = 0
//   for (let i = 0; i < _list.length; i++) {
//     const element = _list[i];
//     total += element._price * element._amount
//   }
//   return total
// }

