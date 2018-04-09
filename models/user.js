var mongoose = require("mongoose"),
Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');

var UserSchema = new Schema({
  name: {type: String, required: true },
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  role: String
});

UserSchema.plugin(uniqueValidator);

var User = mongoose.model('User', UserSchema);

module.exports = User;