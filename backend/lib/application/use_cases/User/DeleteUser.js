'use strict';

module.exports = (user_id, {
  userRepository
}) => {
  return userRepository.remove(user_id);
};