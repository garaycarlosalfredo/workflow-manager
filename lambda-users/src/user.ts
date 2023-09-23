import { equals } from "ramda";
import { createUserMongodb } from "./service/db/mongo/mongo-sdk";

const createUser = async (db, user) => {
  if (equals("mongodb", db)) {
    return createUserMongodb(user);
  }
  throw new Error("not valid db found"); // (TODO) improve the error handler
};

export { createUser };
