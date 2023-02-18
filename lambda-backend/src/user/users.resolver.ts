const { APP_VERSION, APP_ENV } = process.env;
const axios = require("axios");
const { userRequest } = require("../user/user.ts");

module.exports = {
  Query: {
    hello: async () => await userRequest({}),
  },
};
