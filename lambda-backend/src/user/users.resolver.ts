const { APP_VERSION, APP_ENV } = process.env;
const { userRequest } = require("../user/user.ts");

module.exports = {
  Query: {
    hello: async () => await userRequest({}),
  },
};
