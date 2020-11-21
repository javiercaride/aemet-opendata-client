/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

module.exports = {
  clearMocks: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testEnvironment: "node",
  testRegex: [
    "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$"
  ],
  transform: {
    "^.+\\.(t|j)sx?$": "ts-jest"
  },
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/lib/"]
};
