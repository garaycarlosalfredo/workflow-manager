"use strict";
const { loadSchemaSync } = require("@graphql-tools/load");
const { GraphQLFileLoader } = require("@graphql-tools/graphql-file-loader");
const { mergeResolvers } = require("@graphql-tools/merge");
const { loadFilesSync } = require("@graphql-tools/load-files");
const { makeExecutableSchema } = require("@graphql-tools/schema");

function buildSchema() {
<<<<<<< HEAD:lambda-backend/src/schema.ts
  // Load resolvers from files .resolver.ts
  const resolverFiles = loadFilesSync("./**/*.resolver.ts");

  // Merge all resolvers files
  const resolvers = mergeResolvers(resolverFiles);

  // Load schemas from files .graphql
  const typeDefs = loadSchemaSync("./**/*.graphql", {
    loaders: [new GraphQLFileLoader()],
  });
  // Combine schema and resolvers using makeExecutableSchema
=======
  // Load resolvers from files
  const resolverFiles = loadFilesSync("./**/*.resolver.ts");
  // Merge all resolvers files
  const resolvers = mergeResolvers(resolverFiles);

  // Load schemas from giles
  const typeDefs = loadSchemaSync("./**/*.graphql", {
    loaders: [new GraphQLFileLoader()],
  });
  // combine schema and resolvers using makeExecutableSchema
>>>>>>> main:src/schema.ts
  return makeExecutableSchema({ typeDefs, resolvers });
}

module.exports = {
  buildSchema,
};
