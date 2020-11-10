const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const UserSchema = new Schema({
  id: { type: Number },
  first_name: String,
  last_name: String,
  is_closed: Boolean,
  sex: { type: String, default: null },
  age: { type: String, default: null },
  photo_50: String,
  photo_100: String,
  photo_200_orig: String,
});

// UserSchema.plugin(require('mongoose-unique-validator'));

exports.default = model('User', UserSchema);

