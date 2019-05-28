const SILVER_1 = '>';
const SILVER_2 = '>>';
const SILVER_3 = '>>>';
const SILVER_4 = '>>>>';
const GLOBAL_ELITE = '✨🌎✨';

const getLiveRating = (rank) => {
  let ranking;
  if (rank < 1200) {
    ranking =  SILVER_1;
  } else {
    ranking =  GLOBAL_ELITE;
  }
  return ranking;
}

const getTacticsRating = (rank) => {
  let ranking;
  if (rank < 1590) {
    ranking =  SILVER_1;
  } else {
    ranking =  GLOBAL_ELITE;
  }
  return ranking;
};

module.exports = {
  getLiveRating,
  getTacticsRating
};
