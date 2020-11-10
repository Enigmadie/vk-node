const router = require('express').Router();
const axios = require('axios');

const User = require('../models/User').default;
const getFriends = require('../services/vkApi').getFriends;
const { formatFriends } = require('../utils/');

router.get('/', (req, res) => {
  res.send('Hello, row');
});

router.get('/addfriends', async (req, res) => {
  const friendsPath = getFriends(23566160);

  try {
    const { data: { response } } = await axios.get(friendsPath);
    console.log(response)

    const formatedFriends = formatFriends(response.items);
    const friendsAmount = formatedFriends.length;

    User.insertMany(formatedFriends).catch((e) => {
      console.log(e);
      res.status(422);
    });

    let count = 0;
    let iterTime = 2000;

    formatedFriends
      .filter(el => el.is_closed === false)
      .forEach((friend, i) => {
      setTimeout(async () => {
      if (count > 10000) {
        iterTime = 0;
        return;
      }
      const { data: { response } } = await axios.get(getFriends(friend.id));
      const formatedFriends = formatFriends(response.items);
      const friendsAmount = formatedFriends.length;
      count += friendsAmount;

      await User.insertMany(formatedFriends).catch((e) => {
            console.log(e);
            res.status(422);
      });
      }, iterTime * (i + 1));
    });
    res.send("Complete!");
  } catch(e) {
    console.log(e);
    res.status(422);
  }
});

module.exports = router;
