import { MongoClient } from "mongodb";

const {
  MONGODB_URL = "",
  MONGODB_DB_NAME = "",
  MONGODB_COLLECTION_USERS = "",
} = process.env;

/**
 * MongoDB client instance used to connect to the database.
 * @type {MongoClient}
 */
const client = new MongoClient(MONGODB_URL);

/**
 * Registers a user in the MongoDB database.
 *
 * @param {Object} user - The user data to be registered.
 * @param {string} user.username - The username of the user.
 * @param {string} user.email - The email address of the user.
 * @returns {Promise<Object>} - A promise that resolves with the result of the insertion operation.
 * @throws {Error} - Throws an error if any issues occur during the operation.
 */
const signUpMongodb = async (user) => {
  try {
    await client.connect();
    const db = client.db(MONGODB_DB_NAME);
    const usersCollection = db.collection<any>(MONGODB_COLLECTION_USERS);
    const result = await usersCollection.insertOne(user);
    return result;
  } catch (error) {
    console.error("Error", error); // (TODO) improve error logger
  } finally {
    await client.close();
  }
};

export { signUpMongodb };
