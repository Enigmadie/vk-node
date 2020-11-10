const getAge = (date) => {
  const dateArr = date.split('.');
  const dateFullLength = 3;
  if (dateArr.length < dateFullLength) {
    return null;
  }
  [dateArr[0], dateArr[1]] = [dateArr[1], dateArr[0]];
  const formatedDate = dateArr.join('.');
  return calculateAge(new Date(formatedDate));
};

const getSex = (num) => num === 1 ? 'female' : 'male';

const formatFriends = (friends) => {
  return friends
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
};

const calculateAge = (birthday) => {
  var ageDifMs = Date.now() - birthday.getTime();
  var ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

module.exports = {
  getAge,
  getSex,
  formatFriends,
};
