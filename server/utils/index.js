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

const calculateAge = (birthday) => {
  var ageDifMs = Date.now() - birthday.getTime();
  var ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

module.exports = {
  getAge,
  getSex,
};
