<<<<<<< HEAD:lambda-backend/src/user/users.resolver.ts
const { APP_VERSION, APP_ENV } = process.env;
const axios = require("axios");
const { userRequest } = require("../user/user.ts");

module.exports = {
  Query: {
    hello: async () => await userRequest({}),
  },
};
=======
const {APP_VERSION} = process.env

module.exports = {
  Query: {
    hello: () => `world version: ${APP_VERSION}`,
  },
};
>>>>>>> main:src/user/users.resolver.ts
