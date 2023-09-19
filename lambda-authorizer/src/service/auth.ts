import { isNil } from "ramda";

const signUp = async (client, user) => {
  if (isNil(client)) throw new Error("no implementado");
  return client.signUp(user);
};

export { signUp };
