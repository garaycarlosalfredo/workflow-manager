import { userHandler } from "./users/user-handler";

/**
 * Builds an AWS λ handler function from the given `config` and injects required dependencies into its context.
 *
 * @param {object} config A configuration object.
 * @returns {Function} An AWS λ handler functions.
 */
function createUserHttpEventHandler(config) {
  //Here I can inject functions and configs
  return userHandler;
}

export default createUserHttpEventHandler;
