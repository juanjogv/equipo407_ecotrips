'use strict';

module.exports = (user_id, {
  userRepository
}) => {
  return userRepository.get(user_id);
};