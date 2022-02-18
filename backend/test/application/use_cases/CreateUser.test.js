const User = require("../../../lib/domain/User");
const UserRepository = require("../../../lib/domain/UserRepository");
const mockUserRepository = new UserRepository();
const CreateUser = require("../../../lib/application/use_cases/User/CreateUser");

test("should resolve with the newly persisted user (augmented with an ID)", async () => {
  // given
  const persistedUser = new User({
    id: null,
    user_first_name: "Juan Jose",
    user_last_name: "Garcia",
    user_id: 1000556780,
    user_email: "juan@gmail.com",
    user_password: "123",
  });
  mockUserRepository.persist = jest.fn((domainUser) => persistedUser);

  // when
  const user = await CreateUser("Juan Jose", "Garcia", 1000556780, "juan@gmail.com", "123", { userRepository: mockUserRepository });

  // then
  expect(mockUserRepository.persist).toHaveBeenCalledWith(
    new User({
      id: null,
      user_first_name: "Juan Jose",
      user_last_name: "Garcia",
      user_id: 1000556780,
      user_email: "juan@gmail.com",
      user_password: "123",
    })
  );
  expect(user).toEqual(persistedUser);
});
