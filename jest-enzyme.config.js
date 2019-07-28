module.exports = {
    verbose: true,
    testMatch: ["**/tests/enzyme/**/*.test.tsx"],
    collectCoverageFrom: [
        "./dm-binder/core/services/**/*.js",
        "./dm-binder/core/components/**/*.js",
        "./dm-binder/core/components/**/*.jsx",
        "./dm-binder/core/components/**/*.ts",
        "./dm-binder/core/components/**/*.tsx"
    ],
    moduleNameMapper: {
        "^.+\\.(css|less|scss)$": "babel-jest"
    }
};
