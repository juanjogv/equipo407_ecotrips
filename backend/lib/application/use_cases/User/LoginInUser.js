const {
  comparePassword
} = require('../../utilities/bcrypt');

module.exports = async (user_email, user_password, {
  userRepository
}) => {
  return await comparePassword(user_password, await userRepository.logIn(user_email));
};