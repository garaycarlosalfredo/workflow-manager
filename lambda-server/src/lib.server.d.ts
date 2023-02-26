type ServerContext = {
  lambdaEvent: any;
  lambdaContext: any;
};

declare module "./schema" {
  import { GraphQLSchema } from "graphql";
  const buildSchema: () => GraphQLSchema;
  export default buildSchema;
}
