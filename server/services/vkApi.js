const querystring = require('querystring');
require('dotenv').config();

const apiUrl = 'https://api.vk.com/method';
const access_token = process.env.ACCESS_TOKEN;
const v = 5.124;

const friendsGetData = {
  method: 'friends.get',
  query: {
    fields: 'sex,bdate,photo_50,photo_100,photo_200_orig',
    access_token,
    v
  }
};

const getFriends = (id) => {
  const query = {
    user_id: id,
    ...friendsGetData.query,
  };

  return [apiUrl, friendsGetData.method, `?${querystring.stringify(query)}`].join('/');
}

module.exports = {
  getFriends,
}
