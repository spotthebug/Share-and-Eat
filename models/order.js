var mongoose = require("mongoose"),
Schema = mongoose.Schema;

var OrderSchema = new Schema({
  restaurant: {type: Schema.Types.ObjectId, ref:'Restaurant' },
  user: {type: Schema.Types.ObjectId, ref:'User'},
  item: {type: Schema.Types.ObjectId, ref:'MenuItem'},
  orderTotal: Number,
  charityAmt: Number

});

var Order = mongoose.model('Order', OrderSchema);

module.exports = Order;