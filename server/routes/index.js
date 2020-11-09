const router = require('express').Router();
const User = require('../models/User').default;
const getFriends = require('../services/vkApi').getFriends;

router.get('/', (req, res) => {
  console.log(getFriends(3181862));
  res.send('Hello, row');
});

router.get('/addFreinds', (req, res) => {
  console.log(getFriends(3181862));
  res.send('Hello, row');
});

module.exports = router;
