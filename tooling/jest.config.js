module.exports = {
  rootDir: '../',
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFilesAfterEnv: [
    "./src/tests/setup.ts"
  ],
  testMatch: ['<rootDir>/src/**/*.test.ts'],
  coveragePathIgnorePatterns: ['/node_modules/'],
  collectCoverage: false,
  collectCoverageFrom: ['src/**/*.ts'],
  passWithNoTests: true,
};
