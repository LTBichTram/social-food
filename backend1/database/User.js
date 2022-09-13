import { User } from "../models/User";

export const createUser = async function (
  fullname,
  username,
  email,
  password,
  isOnline
) {
  const user = await User.create({
    fullname,
    username,
    email,
    password,
    isOnline,
  });
  return user;
};
