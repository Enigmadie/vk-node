const mongoose = require('mongoose');
require('dotenv').config();

const mongoUrl = process.env.DB_URL;

mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDb connected'))
  .catch((err) => console.log(err));

exports.default = mongoose;
