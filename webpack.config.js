const path = require("path");

module.exports = {
    // devServer: {
    //     contentBase: __dirname + '/public',
    //     inline: false,
    // },
    mode: "development",
    entry: "./index.js",
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "main.js",
    },

    target: "web",
    devServer: {
        // inline: false,
        port: "3000",
        static: ["./public"],
        open: true,
        hot: true,
        liveReload: true,
    },
    resolve: {
        extensions: [".js", ".jsx", ".json", ".ts"],
        alias: {
            handlebars: 'handlebars/dist/handlebars.min.js'
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: "babel-loader",
            },
        ],
    // rules: [{ test: /\.txt$/, use: 'raw-loader' }],
    },
};