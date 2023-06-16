const path = require("path");

module.exports = {
  preset: "jest-expo",
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
    "^.+\\.(ts|tsx)$": [
      "@swc/jest",
      {
        jsc: {
          transform: {
            react: {
              runtime: "automatic",
            },
          },
        },
      },
    ],
  },
  transformIgnorePatterns: [
    "node_modules/(?!(jest-)?react-native|react-clone-referenced-element|(@)?react-native|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|sentry-expo|native-base|react-native-safe-area-context)",
  ],
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/**/*.d.ts",
    "!src/mocks/**",
  ],
  coveragePathIgnorePatterns: [],
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    "^@moes-media/native-base-components-atoms(.*)$": path.resolve(
      __dirname,
      "../../packages/native-base-atoms/dist/index.js"
    ),
    "^@moes-media/native-base-components-utils(.*)$": path.resolve(
      __dirname,
      "../../packages/utils/dist/index.js"
    ),
    "^@moes-media/native-base-components-typography(.*)$": path.resolve(
      __dirname,
      "../../packages/typography/dist/index.js"
    ),
  },
};
