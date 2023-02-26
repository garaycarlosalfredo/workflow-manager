type ServerContext = {
  lambdaEvent: any;
  lambdaContext: any;
};

declare module "schema" {
  import { GraphQLSchema } from "graphql";
  export const buildSchema: () => GraphQLSchema;
}
