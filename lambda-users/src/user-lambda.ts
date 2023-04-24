import { userHandler } from "./users/user-handler";

/**
 * Builds an AWS λ handler function from the given `config` and injects required dependencies into its context.
 *
 * @param {object} config A configuration object.
 * @returns {Function} An AWS λ handler functions.
 */
const createUserHttpEventHandler = (config) => {
  //Here I can inject functions and configs
  const fconsole = async () => {
    return console.log("Hello");
  };

  return ({ event, context }) => userHandler(event, { ...context, fconsole });
};

export default createUserHttpEventHandler;
