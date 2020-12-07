const router = require('express').Router();

const axios = require('axios');
require('dotenv').config();

const sendMessage = require('../services/vkApi').sendMessage;

const WIN_DC = `
  Твой приз — промокод Delivery Club на 300 руб. \n
  Чат-бот Pepsi уже прислал его!
`;

const WIN_OZON = `
  Твой приз — промокод OZON на 500 руб. \n
  Чат-бот Pepsi уже прислал его!
`;

const WIN_IPHONE = `
  Твой приз — iPhone 12. \n
  Чат-бот Pepsi напишет тебе, как получить приз!
`;

const PARTICIPATE_AND_COMIN_SOON_DC_AND_OZON = `
  Разыгрываем промокоды Delivery Club на 300 руб. и OZON на 500 руб.
`;

const PARTICIPATE_AND_COMIN_SOON_IPHONE_12 = `
  Разыгрываем iPhone 12. \n
  Для участия тебе необходимо быть не младше 16 лет и выполнить хотя бы одно задание в разделе Календарь.
`;

const NOT_PARTICIPATE = `Твой результат: не участвовал в розыгрыше`;

const BAD_LUCK = `Твой результат: эх, не повезло!`;

router.get('/', (req, res) => {
  res.send('Hello, low');
});

router.post('/bot', (req, res) => {
  res.send(process.env.CONF_TOKEN);
});

 const users = [
   {id: 24870148, message: WIN_DC },
   {id: 24870148, message: WIN_OZON },
   {id: 24870148, message: WIN_IPHONE },
   {id: 24870148, message: PARTICIPATE_AND_COMIN_SOON_IPHONE_12 },
   {id: 24870148, message: PARTICIPATE_AND_COMIN_SOON_DC_AND_OZON },
 ];

// const users = [
//   {id: 306512025, message: WIN_DC },
//   {id: 173170473, message: WIN_OZON },
//   {id: 173170473, message: WIN_IPHONE },
//   {id: 173170473, message: PARTICIPATE_AND_COMIN_SOON_IPHONE_12 },
//   {id: 173170473, message: PARTICIPATE_AND_COMIN_SOON_DC_AND_OZON },
// ];

router.get('/gift', async (req, res) => {
  try {
    let iterTime = 2000;

    users.forEach((user, i) => {
      setTimeout(async () => {
        await axios.get(sendMessage(user.id, user.message));
      }, iterTime * (i + 1));
    });
    res.send("Complete!");
  } catch(e) {
    console.log(e);
    res.status(422);
  }
});

module.exports = router;










