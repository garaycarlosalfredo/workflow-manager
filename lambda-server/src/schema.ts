"use strict";
const { loadSchemaSync } = require("@graphql-tools/load");
const { GraphQLFileLoader } = require("@graphql-tools/graphql-file-loader");
const { mergeResolvers } = require("@graphql-tools/merge");
const { loadFilesSync } = require("@graphql-tools/load-files");
const { makeExecutableSchema } = require("@graphql-tools/schema");

function buildSchema() {
  // Load resolvers from files .resolver.ts
  const resolverFiles = loadFilesSync("./**/*.resolver.ts");

  // Merge all resolvers files
  const resolvers = mergeResolvers(resolverFiles);

  // Load schemas from files .graphql
  const typeDefs = loadSchemaSync("./**/*.graphql", {
    loaders: [new GraphQLFileLoader()],
  });
  // Combine schema and resolvers using makeExecutableSchema
  return makeExecutableSchema({ typeDefs, resolvers });
}

module.exports = {
  buildSchema,
};
