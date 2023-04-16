import { signIn, signInGoogle } from "./authorizer";

export const authorizerResolver = {
  Mutation: {
    signInUser: signIn,
    signInUserGoogle: signInGoogle,
  },
};
