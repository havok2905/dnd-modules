module.exports = {
    verbose: true,
    testMatch: ["**/tests/**/*.test.ts", "**/tests/**/*.test.tsx"],
    collectCoverageFrom: [
        "./dm-binder/core/services/**/*.js",
        "./dm-binder/core/services/**/*.ts",
        "./dm-binder/core/components/**/*.js",
        "./dm-binder/core/components/**/*.jsx",
        "./dm-binder/core/components/**/*.ts",
        "./dm-binder/core/components/**/*.tsx"
    ],
    moduleNameMapper: {
        "^.+\\.(css|less|scss)$": "babel-jest"
    }
};
