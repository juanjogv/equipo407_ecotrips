'use strict';
const { comparePassword } = require('../utilities/bcrypt');

module.exports = async (userEmail, { userRepository, accessTokenManager }) => {
  const user = await userRepository.getByEmail(userEmail);
  // if (!user || !await comparePassword(password, user.userPassword)) {
  //   throw new Error('Bad credentials');
  // }
  if (!user) {
    throw new Error('Bad credentials');
  }

  return accessTokenManager.generate({ uid: user.id });
};
