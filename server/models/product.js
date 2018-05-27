const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Schema.Types.Decimal128,
    required: true,
  },
  quantity: {
    type: Number,
    default: 1,
  },
  url: {
    type: String,
    default: '/img/processing.jpg',
  },
  description: {
    type: String,
    default: 'A brand new product',
  },
});
const model = mongoose.model.bind(mongoose);
const Model = model('Product', productSchema);
module.exports = Model;
