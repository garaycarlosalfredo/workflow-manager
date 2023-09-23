import { compose } from "ramda";
import { addUserHandler } from "./users/add-user-handler";
import { addUser } from "./service/user-db";

/**
 * Builds an AWS λ handler function from the given `config` and injects required dependencies into its context.
 *
 * @param {object} config A configuration object.
 * @returns {Function} An AWS λ handler functions.
 */
const createAddUserHttpEventHandler = (config) => {
  // inject addUser AWS SDK put
  const functionInjectAddUser = (handler) => (event, context) => {
    return handler(event, { ...context, addUser });
  };

  return compose(functionInjectAddUser)(addUserHandler);
};

export default createAddUserHttpEventHandler;
