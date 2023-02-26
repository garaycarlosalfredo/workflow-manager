import { loadSchemaSync } from "@graphql-tools/load";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { mergeResolvers } from "@graphql-tools/merge";
import { loadFilesSync } from "@graphql-tools/load-files";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { authorizerResolver } from "./authorizer/authorizer.resolver"; // manually import resolvers

export function buildSchema() {
  // Load resolvers from files .resolver.ts
  //const resolverFiles = loadFilesSync("./**/*.resolver.ts");
  // loadFilesSync do not work at moment in typescript, import error

  // Merge all resolvers files
  const resolvers = mergeResolvers([authorizerResolver]);

  // Load schemas from files .graphql
  const typeDefs = loadSchemaSync("./**/*.graphql", {
    loaders: [new GraphQLFileLoader()],
  });

  // Combine schema and resolvers using makeExecutableSchema
  return makeExecutableSchema({ typeDefs, resolvers });
}
