const { resolve } = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const { HotModuleReplacementPlugin } = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
    entry: resolve(__dirname, "src/main.js"),
    output: {
        path: resolve(__dirname, "build"),
        filename: "build.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env"]
                }
            },
            {
                test: /.vue$/,
                loader: "vue-loader"
            },
            {
                test: /\.(scss|css)$/,
                use: ["vue-style-loader", "css-loader", "sass-loader"]
            }
        ]
    },
    plugins: [
        new Dotenv({}),
        new HotModuleReplacementPlugin(),
        new VueLoaderPlugin(),
        new HTMLWebpackPlugin({
            showErrors: true,
            cache: true,
            template: resolve(__dirname, "src/index.html")
        })
    ]
};
