/**
 * AWS λ lambda user service
 * This lambda contents all the handlers to interact with users table.
 *
 * @module lambda-user-service
 */

import config from "./src/config/config";
import createUserHttpEventHandler from "./src/user-lambda";

const handleHttpUsers = createUserHttpEventHandler(config);

export { handleHttpUsers };
