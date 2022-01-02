const User = require("../../../lib/domain/User");
const UserRepository = require("../../../lib/domain/UserRepository");
const mockUserRepository = new UserRepository();
const LoginInUser = require("../../../lib/application/use_cases/User/LoginInUser");

test("should ", async () => {
  // given
  const correspondingUser = new User({
    id: 1,
    user_first_name: "Juan Jose",
    user_last_name: "Garcia",
    user_id: 1000556780,
    user_email: "juan@gmail.com",
    user_password: "$2b$10$bT/yNKW8M1s5OA/AoLAcKuQH8hc1qKOnTAk5vXXu6gvdPSvEAYKgi",
  });
  mockUserRepository.logIn = jest.fn((user_email) => correspondingUser);

  // when
  const user = await LoginInUser("juan@gmail.com", "123", { userRepository: mockUserRepository });

  // then
  expect(mockUserRepository.logIn).toHaveBeenCalledWith("juan@gmail.com");
  expect(user).toEqual(correspondingUser);
});
