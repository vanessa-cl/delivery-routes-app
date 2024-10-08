import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./",
});

/** @type {import('jest').Config} */
const config = {
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["./jest.setup.js"],
  moduleFileExtensions: ["js", "jsx", "json", "node"],
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "/__tests__/",
    "/coverage/",
    "/build/",
    "/dist/",
    "/.next/",
    "/styles/",
    "/utils/",
    "/context/"
  ],
  silent: false,
};

export default createJestConfig(config);
