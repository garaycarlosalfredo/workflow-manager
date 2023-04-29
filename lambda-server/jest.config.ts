import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: "ts-jest/presets/js-with-ts",
  testEnvironment: "node",
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
  // transformIgnorePatterns: ["<rootDir>/node_modules/"],
};

export default config;
