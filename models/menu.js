var mongoose = require("mongoose"),
Schema = mongoose.Schema;

var MenuSchema = new Schema({
  restaurant: {type: Schema.Types.ObjectId, ref:'Restaurant' }
});

var Menu = mongoose.model('Menu', MenuSchema);

module.exports = Menu;