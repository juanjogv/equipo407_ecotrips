const { comparePassword } = require("../../utilities/bcrypt");

module.exports = async (user_email, user_password, { userRepository }) => {
  const user = await userRepository.logIn(user_email);
  const isPasswordValid = await comparePassword(user_password, user.user_password);
  if (!isPasswordValid) throw "EMAIL_AND_PASS_NOT_MATCH";
  return user;
};
