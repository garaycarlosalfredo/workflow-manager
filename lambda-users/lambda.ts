/**
 * AWS λ lambda user service
 * This lambda contents all the handlers to interact with users table.
 *
 * @module lambda-user-service
 */

import getUserHttpEventHandler from "./src/user-lambda";
import createAddUserHttpEventHandler from "./src/add-user-lambda";
import createHttpEventHandler from "./src/create-user-lambda";
import config from "./src/config/config";

const handleHttpGetUser = getUserHttpEventHandler(config);
const handleHttpAddUsers = createAddUserHttpEventHandler(config);
const handleHttpCreateUser = createHttpEventHandler(config);

export { handleHttpGetUser, handleHttpAddUsers, handleHttpCreateUser };
