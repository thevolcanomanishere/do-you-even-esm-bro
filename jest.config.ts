import type { JestConfigWithTsJest } from "ts-jest";

const jestConfig: JestConfigWithTsJest = {
  testMatch: ["**/*.test.js"],
  preset: "ts-jest",
};

export default jestConfig;
