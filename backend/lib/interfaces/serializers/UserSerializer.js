'use strict';

const _serializeSingleUser = (user) => {
  return {
    'id': user.id,
    'user_first_name': user.user_first_name,
    'user_last_name': user.user_last_name,
    'user_email': user.user_email,
  };
};

module.exports = class {

  serialize(data) {
    if (!data) {
      throw new Error('Expect data to be not undefined nor null');
    }
    if (Array.isArray(data)) {
      return data.map(_serializeSingleUser);
    }
    return _serializeSingleUser(data);
  }

};