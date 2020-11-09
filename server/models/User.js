const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const UserSchema = new Schema({
  id: Number,
  first_name: String,
  last_name: String,
  "can_access_closed": Boolean,
  "is_closed": Boolean,
  "sex": Number,
  "photo_50": String,
  "photo_100": String,
  "bdate": String,
  "photo_200_orig": String,
  "track_code": String,
});

exports.default = model('User', UserSchema);

