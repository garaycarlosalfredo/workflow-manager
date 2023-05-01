import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  transformIgnorePatterns: ["/node_modules/(?!node-fetch)/"],
  testTimeout: 50000, // o cualquier otro valor que creas necesario
  preset: "ts-jest/presets/js-with-ts",
  testEnvironment: "node",
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
  // transformIgnorePatterns: ["<rootDir>/node_modules/"],
};

export default config;
