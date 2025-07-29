const mongoose = require('mongoose');
const { Schema } = mongoose;

const ItemSchema = new Schema({
  id: String,
  name: String,
  size: String,
  price: Number,  // price per item * quantity (total price)
  qty: Number
});

const OrderSchema = new Schema({
  email: {
    type: String,
    required: true,
    // Removed unique:true to allow multiple orders per user
  },
  order_date: {
    type: Date,
    default: Date.now  // Store order date as Date type at order level
  },
  order_data: {
    type: [ItemSchema],
    required: true
  }
});

module.exports = mongoose.model('order', OrderSchema);
