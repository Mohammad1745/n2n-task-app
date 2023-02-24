const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: [
        "./src/index.js",
        // './src/js/api_service.js',
        './src/js/config.js',
        // './src/js/create.js',
        // './src/js/details.js',
        // './src/js/edit.js',
        './src/js/list.js',
        "./src/css/style.css",
        "./src/css/bootstrap.css",
    ],
    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: "/",
        filename: "bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    plugins: [new HtmlWebpackPlugin({ template: "src/index.html" })],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 5001,
        historyApiFallback: true,
    },
};
