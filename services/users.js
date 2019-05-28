const User = require('../models/user');

const get = async (query) => {
  return User.findOne(query);
};

const create = async (data) => {
  return User.create(data);
};

const list = async (query) => {
  return User.find(query);
};

module.exports = {
  create,
  get,
  list
};
