const path = require('path');
const CommonConfig = require('./webpack.common.config');

module.exports = {
    entry: path.resolve(__dirname, 'adventures/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    ...CommonConfig
};