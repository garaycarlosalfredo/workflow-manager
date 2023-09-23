import { MongoClient, ObjectId } from "mongodb";
const {
  MONGODB_DB_URL = "mongodb://localhost:27017",
  MONGODB_DB_NAME = "gestion",
  MONGODB_DB_COLLECTION_USERS = "users",
} = process.env;

const TTL = new Date(Date.now() + 1 * 60 * 1000);

/**
 * MongoDB client instance used to connect to the database.
 * @type {MongoClient}
 */
const client = new MongoClient(MONGODB_DB_URL);

/**
 * Registers a user in the MongoDB database.
 *
 * @param {Object} user - The user data to be registered.
 * @param {string} user.username - The username of the user.
 * @param {string} user.email - The email address of the user.
 * @returns {Promise<Object>} - A promise that resolves with the result of the insertion operation.
 * @throws {Error} - Throws an error if any issues occur during the operation.
 */
const createUserMongodb = async (user) => {
  try {
    await client.connect();
    const db = client.db(MONGODB_DB_NAME);
    const usersCollection = db.collection<any>(MONGODB_DB_COLLECTION_USERS);
    const userCredentials = await usersCollection.insertOne(user);
    return userCredentials;
  } catch (error) {
    console.error("Error during user sign-up", error); // (TODO) improve error logger
    throw new Error("Error during user sign-up" + error?.message); // (TODO) improve error handle
  } finally {
    await client.close();
  }
};

export { createUserMongodb };
