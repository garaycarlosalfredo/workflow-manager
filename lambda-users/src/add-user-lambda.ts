import { addUserHandler } from "./users/add-user-handler";
import { addUser } from "./Service/user-db";

/**
 * Builds an AWS λ handler function from the given `config` and injects required dependencies into its context.
 *
 * @param {object} config A configuration object.
 * @returns {Function} An AWS λ handler functions.
 */
const createAddUserHttpEventHandler = (config) => {
  return (event, context) => addUserHandler(event, { ...context, addUser });
};

export default createAddUserHttpEventHandler;
