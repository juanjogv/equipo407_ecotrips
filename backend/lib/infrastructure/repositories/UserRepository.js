"use strict";

const User = require("../../domain/User");
const UserRepository = require("../../domain/UserRepository");

const { users } = require("../orm/sequelize/relationalModel");

module.exports = class extends UserRepository {
  constructor() {
    super();
  }

  async signIn(userEntity) {
    const { user_first_name, user_last_name, user_id, user_email, user_password } = userEntity;

    const userCheck = await users.findOne({
      where: {
        user_email,
      },
    });

    if (userCheck) throw "ER_DUP_ENTRY";

    const seqUser = await users.create({
      user_first_name,
      user_last_name,
      user_id,
      user_email,
      user_password,
    });

    return new User({
      id: seqUser.id,
      user_first_name: seqUser.user_first_name,
      user_last_name: seqUser.user_last_name,
      user_id: seqUser.user_id,
      user_email: seqUser.user_email,
      user_password: seqUser.user_password,
    });
  }

  async logIn(user_email) {
    return this.getByEmail(user_email);
  }

  async find() {
    const seqUsers = await users.findAll();
    return seqUsers.map((seqUser) => {
      return new User({
        id: seqUser.id,
        user_first_name: seqUser.user_first_name,
        user_last_name: seqUser.user_last_name,
        user_id: seqUser.user_id,
        user_email: seqUser.user_email,
        user_password: seqUser.user_password,
      });
    });
  }

  async persist(userEntity) {
    const { user_first_name, user_last_name, user_id, user_email, user_password } = userEntity;
    const seqUser = await users.create({
      user_first_name,
      user_last_name,
      user_id,
      user_email,
      user_password,
    });
    return new User({
      id: seqUser.id,
      user_first_name: seqUser.user_first_name,
      user_last_name: seqUser.user_last_name,
      user_id: seqUser.user_id,
      user_email: seqUser.user_email,
      user_password: seqUser.user_password,
    });
  }

  async get(user_id) {
    const seqUser = await users.findByPk(user_id);

    if (seqUser)
      return new User({
        id: seqUser.id,
        user_first_name: seqUser.user_first_name,
        user_last_name: seqUser.user_last_name,
        user_id: seqUser.user_id,
        user_email: seqUser.user_email,
        user_password: seqUser.user_password,
      });
    else return false;
  }

  async remove(user_id) {
    const seqUser = await users.findByPk(user_id);
    if (seqUser) {
      return seqUser.destroy();
    }
    return false;
  }

  async merge(userEntity) {
    const seqUser = await this.model.findByPk(userEntity.id);

    if (!seqUser) return false;

    const { full_name, last_name, email, pass, upgrade_time, last_entry, status, admin, parent_id } = userEntity;
    await seqUser.update(
      {
        full_name,
        last_name,
        email,
        pass,
        last_entry,
        status,
        admin,
        parent_id,
        upgrade_time,
      },
      {
        where: {
          id: userEntity.id,
        },
      }
    );

    return new User(
      seqUser.id,
      seqUser.full_name,
      seqUser.last_name,
      seqUser.email,
      seqUser.pass,
      seqUser.register_time,
      seqUser.last_entry,
      seqUser.status,
      seqUser.admin,
      seqUser.parent_id,
      seqUser.upgrade_time
    );
  }

  async getByEmail(user_email) {
    const seqUser = await users.findOne({
      where: {
        user_email,
      },
    });

    if (!seqUser) throw "EMAIL_NOT_FOUND";

    return new User({
      id: seqUser.id,
      user_first_name: seqUser.user_first_name,
      user_last_name: seqUser.user_last_name,
      user_id: seqUser.user_id,
      user_email: seqUser.user_email,
      user_password: seqUser.user_password,
    });
  }
};
