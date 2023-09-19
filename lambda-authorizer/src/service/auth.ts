import { isNil } from "ramda";
import { signUpMongodb } from "./mongo/mongo-sdk";

const clientDb = {
  mongodb: {
    signUp: signUpMongodb,
  },
};

const signUp = async (db, user) => {
  const client = clientDb[db];
  if (isNil(client)) throw new Error("no implementado");
  return client.signUp(user);
};

export { signUp };
