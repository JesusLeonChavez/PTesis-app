module.exports = {
  preset: "jest-expo",
  transformIgnorePatterns: [
    "node_modules/(?!(jest-)?@react-native|react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base)"
  ],
  moduleNameMapper: {
    "\\.svg": "<rootDir>/src/utils/testUtils/__mocks__/svgMock.js"
  },
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/**/*.d.ts",
    "!src/**/*.types.ts"
  ],
  setupFiles: ["<rootDir>/src/setupTestBeforeEnv.tsx"],
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.tsx"],
  coverageThreshold: {
    global: {
      statements: 1,
      branches: 1,
      lines: 1,
      functions: 1
    }
  },
  watchPlugins: [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname"
  ]
};
