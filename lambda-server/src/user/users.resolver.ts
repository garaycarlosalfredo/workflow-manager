import { userRequest } from "../user/user";

export const userResolver = {
  Query: {
    hello: userRequest,
  },
};
