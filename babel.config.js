module.exports = {
    presets: [
        [
            "@babel/react",
            {
                targets: {
                    node: "current"
                }
            }
        ],
        "@babel/typescript",
        [
            "@babel/preset-env",
            {
                targets: {
                    node: "current"
                }
            }
        ]
    ],
    plugins: ["@babel/plugin-proposal-class-properties"]
};
