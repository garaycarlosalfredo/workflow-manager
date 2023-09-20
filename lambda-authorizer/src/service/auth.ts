import { equals } from "ramda";
import { signUpMongodb } from "./mongo/mongo-sdk";

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

export { signUp };
