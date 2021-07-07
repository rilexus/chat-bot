module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  
  // The root of your source code, typically /src
  // `<rootDir>` is a token Jest substitutes
  roots: ["<rootDir>/src"],
  
  // Jest transformations -- this adds support for TypeScript
  // using ts-jest
  transform: {
    "\\.(ts|js)x?$": "ts-jest",
  },
  
  setupFilesAfterEnv: [
    // "@testing-library/react/cleanup-after-each",
    "@testing-library/jest-dom/extend-expect",
    "@testing-library/jest-dom"
  ],
  
  // Test spec file resolution pattern
  // Matches parent folder `__tests__` and filename
  // should contain `test` or `spec`.
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  
  modulePathIgnorePatterns: [
    "<rootDir>/dist/",
    "<rootDir>/cypress/"
  ],
  // Module file extensions for importing
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"]
};
