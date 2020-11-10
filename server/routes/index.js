const router = require('express').Router();
const axios = require('axios');

const User = require('../models/User').default;
const getFriends = require('../services/vkApi').getFriends;
const { getAge, getSex } = require('../utils/');

router.get('/', (req, res) => {
  res.send('Hello, row');
});

router.get('/addfriends', async (req, res) => {
  const friendsPath = getFriends(306512025);

  try {
    const { data: { response } } = await axios.get(friendsPath);
    const formatedFriends = response.items
      .filter((el) => !el.deactivated)
      .map((el) => {
        const {
          first_name,
          last_name,
          id,
          is_closed,
          sex,
          bdate,
          photo_50,
          photo_100,
          photo_200_orig,
        } = el;

        const age = bdate ? getAge(bdate) : null;
        const sexData = sex ? getSex(sex) : null;

        return {
          first_name,
          last_name,
          id,
          is_closed,
          age,
          sex: sexData,
          photo_50,
          photo_100,
          photo_200_orig,
        };
      });

    User.insertMany(formatedFriends)
      .then(() => {
        res.send({});
      }).catch((e) => {
        console.log(e);
        res.status(422);
      });
  } catch(e) {
    console.log(e);
    res.status(422);
  }
});

module.exports = router;
