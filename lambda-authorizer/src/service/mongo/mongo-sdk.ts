import { MongoClient } from "mongodb";
import { createToken, verifyToken } from "../../utils/jwt";
const {
  MONGODB_URL = "",
  MONGODB_DB_NAME = "",
  MONGODB_COLLECTION_USERS = "",
  MONGODB_COLLECTION_SESSIONS = "",
} = process.env;
const TTL = new Date(Date.now() + 1 * 60 * 1000);

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
    console.error("Error during user sign-up", error); // (TODO) improve error logger
    throw new Error("Error during user sign-up" + error?.message); // (TODO) improve error handle
  } finally {
    await client.close();
  }
};

const signInMongodb = async (user) => {
  try {
    await client.connect();
    const db = client.db(MONGODB_DB_NAME);
    const usersCollection = db.collection<any>(MONGODB_COLLECTION_USERS);
    const params = { email: user.email, password: user.password };
    const userResponse = await usersCollection.findOne(params);
    if (!userResponse) return userResponse;
    userResponse.token = createToken(userResponse);
    return userResponse;
  } catch (error) {
    console.error("Error during user sign-in", error); // (TODO) improve error logger
    throw new Error("Error during user sign-in" + error?.message); // (TODO) improve error handle
  } finally {
    await client.close();
  }
};

const createSession = async (user) => {
  try {
    await client.connect();
    const db = client.db(MONGODB_DB_NAME);
    const usersCollection = db.collection<any>(MONGODB_COLLECTION_SESSIONS);
    usersCollection.createIndex({ expireAt: 1 }, { expireAfterSeconds: 0 });
    const result = await usersCollection.insertOne({
      ...user,
      expireAt: TTL,
    });
    return result;
  } catch (error) {
    console.error("Error on session creation", error); // (TODO) improve error logger
    throw new Error("Error on session creation" + error?.message); // (TODO) improve error handle
  } finally {
    await client.close();
  }
};

export { signUpMongodb, signInMongodb, createSession };
