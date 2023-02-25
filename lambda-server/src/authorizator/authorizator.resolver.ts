const { APP_VERSION, APP_ENV } = process.env;
const { signIn, signInGoogle } = require("./authorizator.ts");

module.exports = {
  Mutation: {
    signInUser: signIn,
    signInUserMediaGoogle: signInGoogle,
  },
};
