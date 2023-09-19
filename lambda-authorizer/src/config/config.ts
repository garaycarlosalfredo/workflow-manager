// Extract environment variables declared in `serverless.yml`
const { NODE_ENV } = process.env;

// ...and build an immutable configuration object from them
const config = Object.freeze({
  environment: NODE_ENV,
  gateways: {},
});

export type Configuration = typeof config;

export default config;
