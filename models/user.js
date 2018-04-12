var mongoose = require("mongoose"),
Schema = mongoose.Schema,
passportLocalMongoose = require('passport-local-mongoose');

var uniqueValidator = require('mongoose-unique-validator');

var UserSchema = new Schema({
  username: {type: String, required: true, unique: true},
  password: String,
  role: String
});

UserSchema.plugin(uniqueValidator);
UserSchema.plugin(passportLocalMongoose);

var User = mongoose.model('User', UserSchema);

module.exports = User;