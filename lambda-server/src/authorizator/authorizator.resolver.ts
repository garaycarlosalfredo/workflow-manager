const { APP_VERSION, APP_ENV } = process.env;
const {  signIn } = require("./authorizator.ts");

module.exports = {
  Mutation: {
    signInUser: signIn
  },
};
