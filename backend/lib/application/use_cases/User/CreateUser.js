"use strict";

const User = require("../../../domain/User");
const { encryptPassword } = require("../../utilities/bcrypt");

module.exports = async (user_first_name, user_last_name, user_id, user_email, user_password, { userRepository }) => {
  const userPassword = await encryptPassword(user_password);
  const user = new User({
    id: null,
    user_first_name,
    user_last_name,
    user_id,
    user_email,
    user_password,
  });
  return userRepository.persist(user);
};
