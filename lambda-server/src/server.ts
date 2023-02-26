import { ApolloServer } from "@apollo/server";
import { startServerAndCreateLambdaHandler } from "@as-integrations/aws-lambda"; //highlight-line
import { buildSchema } from "./schema"; // Build schema for Apollo server
import { postRequest } from "./service/httpRequest";

const server = new ApolloServer<ServerContext>({ schema: buildSchema() });

// This final export is important!
export const graphqlHandler = startServerAndCreateLambdaHandler(server, {
  context: async ({ event, context }) => {
    return {
      lambdaEvent: event,
      lambdaContext: {
        ...context,
        postRequest, // agrega la función como una propiedad del objeto lambdaContext
      },
    };
  },
});
