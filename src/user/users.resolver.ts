const {APP_VERSION} = process.env

module.exports = {
  Query: {
    hello: () => `world version: ${APP_VERSION}`,
  },
};