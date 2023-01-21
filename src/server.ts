import { ApolloServer } from '@apollo/server';
import { startServerAndCreateLambdaHandler } from '@as-integrations/aws-lambda'; //highlight-line

const {APP_VERSION} = process.env

const typeDefs = `#graphql
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => `world version: ${APP_VERSION}`,
  },
};

const server = new ApolloServer<MyContext>({
  typeDefs,
  resolvers,
});

// This final export is important!
export const graphqlHandler = startServerAndCreateLambdaHandler(server, {
  
  context: async ({ event, context }) => {
    return {
      lambdaEvent: event,
      lambdaContext: context,
    };
  },
  
});