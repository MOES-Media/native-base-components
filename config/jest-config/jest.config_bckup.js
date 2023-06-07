/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "react-native",
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageReporters: ["text", "html", "lcov"],
  coveragePathIgnorePatterns: ["node_modules", "dist"],
  testPathIgnorePatterns: ["node_modules", "dist"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": [
      "babel-jest",
      {
        presets: ["@babel/preset-flow"],
        plugins: [["@babel/plugin-transform-private-methods", {loose: true}]],
      },
    ],
  },
  collectCoverageFrom: [
    "src/**/*.{ts,tsx,js,jsx}",
    "!src/**/*.spec.{ts,tsx,js,jsx}",
    "!**/*/*.d.ts",
    "!**/coverage/**",
    "!**/node_modules/**",
  ],
  coverageProvider: "v8",
  automock: true,
  testRegex: "^.+\\.spec.(t|j)sx?$",
  transformIgnorePatterns: [
    "node_modules/(?!(jest-)?@?react-native|react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|@sentry/.*|react-native-svg)"
  ],
  moduleNameMapper: {
    '^react-native$': 'react-native-web',
  },
};
