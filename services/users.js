const User = require('../models/user');

const get = async (query) => {
  return User.findOne(query);
};

const create = async (data) => {
  return User.create(data);
};

const removeUser = async (id) => {
  var query = User.deleteOne({ _id: id });
  query.exec();
}

const list = async (query) => {
  return User.find(query);
};

module.exports = {
  create,
  removeUser,
  get,
  list
};
