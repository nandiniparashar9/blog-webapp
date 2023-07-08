const path = require("path");
module.exports = {
    entry: path.resolve(process.cwd(), './index.js'),
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, "dist") },
    resolveLoader: {
        fallback: '/usr/local/lib/node_modules',
    },
    module: {
        loaderS: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"],
                },
                },
            },
        ],
    },
    mode: 'development',
};
