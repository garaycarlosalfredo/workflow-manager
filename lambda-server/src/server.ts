import { ApolloServer } from "@apollo/server";
import { startServerAndCreateLambdaHandler } from "@as-integrations/aws-lambda"; //highlight-line
import { buildSchema } from "./schema"; // Build schema for Apollo server

const server = new ApolloServer<MyContext>({ schema: buildSchema() });

// This final export is important!
export const graphqlHandler = startServerAndCreateLambdaHandler(server, {
  context: async ({ event, context }) => {
    return {
      lambdaEvent: event,
      lambdaContext: context,
    };
  },
});
