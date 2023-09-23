// Extract environment variables declared in `serverless.yml`
const {
  NODE_ENV,
  CONFIG_JWT_KEY,
  CONFIG_JWT_ALGORITHM,
  CONFIG_JWT_EXPIRATION,
} = process.env;

// ...and build an immutable configuration object from them
const config = Object.freeze({
  environment: NODE_ENV,
  gateways: {},
  jwt: {
    secretKey: CONFIG_JWT_KEY,
    algorithm: CONFIG_JWT_ALGORITHM,
    expiresIn: CONFIG_JWT_EXPIRATION,
  },
});

export type Configuration = typeof config;

export default config;
