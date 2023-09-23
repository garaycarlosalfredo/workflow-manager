import { equals, pick } from "ramda";
import {
  signUpMongodb,
  signInMongodb,
  createSession,
  verifySession,
} from "./service/mongo/mongo-sdk";
import { createToken, verifyToken } from "./utils/jwt";

/**
 * Registers a user in the selected database.
 *
 * @param {string} db - The database type to register the user in (e.g., "mongodb").
 * @param {Object} user - The user data to be registered.
 * @returns {Promise<Object>} - A promise that resolves with the result of the registration operation.
 * @throws {Error} - Throws an error if the specified database is not implemented.
 */
const signUp = async (db, user) => {
  if (equals("mongodb", db)) return await signUpMongodb(user);
  throw new Error("not valid db found"); // (TODO) improve the error handler
};

const signIn = async (db, config, user) => {
  if (equals("mongodb", db)) {
    const userResponse = await signInMongodb(user);
    const sessionId = await createSession(userResponse);
    const token = createToken(config, { sessionId });
    return token;
  }
  throw new Error("not valid db found"); // (TODO) improve the error handler
};

const validation = async (db, config, token) => {
  if (equals("mongodb", db)) {
    const tokenData = await verifyToken(config, token);
    const isValid = await verifySession(tokenData);
    return isValid ? true : false;
  }
  throw new Error("not valid db found"); // (TODO) improve the error handler
};

export { signUp, signIn, validation };
