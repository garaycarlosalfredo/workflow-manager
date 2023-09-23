// Extract environment variables declared in `serverless.yml`
const {
  NODE_ENV,
  MONGODB_DB_URL,
  MONGODB_DB_NAME,
  MONGODB_DB_COLLECTION_USERS,
} = process.env;

// ...and build an immutable configuration object from them
const config = Object.freeze({
  environment: NODE_ENV,
  gateways: {},
  database: {
    mongodb: {
      url: MONGODB_DB_URL,
      name: MONGODB_DB_NAME,
      colection: MONGODB_DB_COLLECTION_USERS,
    },
  },
});

export type Configuration = typeof config;

export default config;
