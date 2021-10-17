const User = require('../../../domain/User');
const {
  encryptPassword
} = require('../../utilities/bcrypt');

module.exports = async (user_first_name, user_last_name, user_id, user_email, user_password, { userRepository }) => {

  user_password = await encryptPassword(user_password);

  return userRepository.signIn(new User({
    user_first_name,
    user_last_name,
    user_id,
    user_email,
    user_password
  }));
};