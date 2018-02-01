/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
// @ts-nocheck
const path = require('path');

module.exports = {
    target: "web",
    entry: path.resolve(__dirname, '../../entry/client.tsx'),
    output: {
        path: path.resolve(__dirname, '../../dist'),
        filename: "[name].js",
        library: "techradar",
        libraryTarget: "window",
        chunkFilename: "[name].[id].js",
        devtoolModuleFilenameTemplate: "techradar:///[resource-path]",
        devtoolFallbackModuleFilenameTemplate: "techradar:///[resource-path]?[hash]",
        crossOriginLoading: "use-credentials"
    },
    module: {
        rules: [
            {
                test: /\.(j|t)sx?$/,
                loader: "awesome-typescript-loader",
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        modules: [
            "node_modules",
            path.resolve(__dirname, '../../'),
        ],
        extensions: [ '.js', '.jsx', '.ts', '.tsx', ],
    },
    context: path.resolve(__dirname, "../../"),
    plugins: [

    ],
    parallelism: 2,
    profile: true,
    cache: true,
};