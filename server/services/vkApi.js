const querystring = require('querystring');
require('dotenv').config();

const apiUrl = 'https://api.vk.com/method';
const access_token = process.env.ACCESS_TOKEN;
const v = 5.103;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

const messageReq = {
  method: 'messages.send',
  query: {
    access_token,
    v
  }
};

const sendMessage = (id, message) => {
  const query = {
    peer_id: id,
    message,
    random_id: getRandomInt(1000, 99999),
    ...messageReq.query,
  };

//   const res = [apiUrl, messageReq.method, `?${querystring.stringify(query)}`].join('/');
  const res = `${apiUrl}/${messageReq.method}?${querystring.stringify(query)}`
  console.log(res);
  return res;
}

module.exports = {
  sendMessage,
}
