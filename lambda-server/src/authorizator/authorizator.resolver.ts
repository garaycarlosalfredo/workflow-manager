const { APP_VERSION, APP_ENV } = process.env;
const { signIn, signInGoogle } = require("./authorizator.ts");

module.exports = {
  Mutation: {
    signInUser: signIn,
    signInUserGoogle: signInGoogle,
  },
};
