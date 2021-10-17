"use strict";

module.exports = class {
  constructor({
    id = null,
    user_first_name,
    user_last_name,
    user_id,
    user_email,
    user_password,
  }) {
    this.id = id;
    this.user_first_name = user_first_name;
    this.user_last_name = user_last_name;
    this.user_id = user_id;
    this.user_email = user_email;
    this.user_password = user_password;
  }
};