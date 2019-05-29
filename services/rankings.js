const NOVICE = '🐥';
const SILVER_1 = '>';
const SILVER_2 = '>>';
const SILVER_3 = '>>>';
const SILVER_4 = '>>>>';
const SILVER_ELITE = '(>>>>';
const SILVER_ELITE_MASTER = '(*>>>>';
const GOLD_NOVA_1 = '⭐️';
const GOLD_NOVA_2 = '⭐️⭐️';
const GOLD_NOVA_3 = '⭐️⭐️⭐️';
const GOLD_NOVA_MASTER = '⭐️⭐️⭐️⭐️';
const MASTER_GUARDIAN_1 = '︻╦╤─';
const MASTER_GUARDIAN_2 = '✨︻╦╤─✨';
const MASTER_GUARDIAN_ELITE = '⚔️︻╦╤─⚔️';
const DISTINGUISHED_MASTER_GUARDIAN = '✨🌟✨';
const LEGENDARY_EAGLE = '⚡️🦅⚡️';
const LEGENDARY_EAGLE_MASTER = '✨🦅✨';
const SUPREME_MASTER_FISRT_CLASS = '✨🌐✨';
const THE_GLOBAL_ELITE = '✨🌎✨';

const getLiveRating = (rank) => {
  let ranking;
  if (rank < 100) {
    ranking = SILVER_1;
  } else if (rank < 200) {
    ranking = SILVER_2;
  } else if (rank < 300) {
    ranking = SILVER_3;
  } else if (rank < 400) {
    ranking = SILVER_4;
  } else if (rank < 500) {
    ranking = SILVER_ELITE;
  } else if (rank < 600) {
    ranking = SILVER_ELITE_MASTER;
  } else if (rank < 700) {
    ranking = GOLD_NOVA_1;
  } else if (rank < 800) {
    ranking = GOLD_NOVA_2;
  } else if (rank < 900) {
    ranking = GOLD_NOVA_3;
  } else if (rank < 1000) {
    ranking = GOLD_NOVA_MASTER;
  } else if (rank < 1100) {
    ranking = MASTER_GUARDIAN_1;
  } else if (rank < 1200) {
    ranking = MASTER_GUARDIAN_2;
  } else if (rank < 1300) {
    ranking = MASTER_GUARDIAN_ELITE;
  } else if (rank < 1400) {
    ranking = DISTINGUISHED_MASTER_GUARDIAN;
  } else if (rank < 1500) {
    ranking = LEGENDARY_EAGLE;
  } else if (rank < 1600) {
    ranking = LEGENDARY_EAGLE_MASTER;
  } else if (rank < 1700) {
    ranking = SUPREME_MASTER_FISRT_CLASS;
  } else {
    ranking = THE_GLOBAL_ELITE;
  }
  return ranking;
}

const getTacticsRating = (rank) => {
  let ranking;
  if (rank < 500) {
    ranking =  NOVICE;
  } else if (rank < 600) {
    ranking = SILVER_1;
  } else if (rank < 700) {
    ranking = SILVER_2;
  } else if (rank < 800) {
    ranking = SILVER_3;
  } else if (rank < 900) {
    ranking = SILVER_4;
  } else if (rank < 1000) {
    ranking = SILVER_ELITE;
  } else if (rank < 1100) {
    ranking = SILVER_ELITE_MASTER;
  } else if (rank < 1200) {
    ranking = GOLD_NOVA_1;
  } else if (rank < 1300) {
    ranking = GOLD_NOVA_2;
  } else if (rank < 1400) {
    ranking = GOLD_NOVA_3;
  } else if (rank < 1500) {
    ranking = GOLD_NOVA_MASTER;
  } else if (rank < 1600) {
    ranking = MASTER_GUARDIAN_1;
  } else if (rank < 1700) {
    ranking = MASTER_GUARDIAN_2;
  } else if (rank < 1800) {
    ranking = MASTER_GUARDIAN_ELITE;
  } else if (rank < 1900) {
    ranking = DISTINGUISHED_MASTER_GUARDIAN;
  } else if (rank < 2000) {
    ranking = LEGENDARY_EAGLE;
  } else if (rank < 2100) {
    ranking = LEGENDARY_EAGLE_MASTER;
  } else if (rank < 2200) {
    ranking = SUPREME_MASTER_FISRT_CLASS;
  } else {
    ranking = THE_GLOBAL_ELITE;
  }
  return ranking;
};

module.exports = {
  getLiveRating,
  getTacticsRating
};
