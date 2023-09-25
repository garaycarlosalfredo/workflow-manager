import { equals } from "ramda";
import {
  createUserMongodb,
  getUserByNumberIdMongodb,
} from "./service/db/mongodb/mongo-sdk";
import { getUserById, findUserByEmail } from "./service/db/dynamodb/user-db";

const createUser = async (db, user) => {
  if (equals("mongodb", db)) {
    return createUserMongodb(user);
  }
  throw new Error("not valid db found"); // (TODO) improve the error handler
};

const getUserByPersonalId = async (db, numberId) => {
  if (equals("mongodb", db)) {
    return getUserByNumberIdMongodb(numberId);
  }
  if (equals("dynamodb", db)) {
    return getUserById(numberId);
  }
  throw new Error("not valid db found"); // (TODO) improve the error handler
};

export { createUser, getUserByPersonalId };
