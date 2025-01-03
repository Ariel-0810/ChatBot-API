module.exports = {
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest"
  },
  testEnvironment: "node",
  transformIgnorePatterns: ["/node_modules/(?!your-esm-package)/"],
  testTimeout: 1000000
};
