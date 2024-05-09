const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },

    mode: 'development',

    devServer: {
        static: path.join(__dirname, 'dist'),
        port: 8080,
        open: true,
        hot: true,
    },
    devtool : 'inline-source-map',
    plugins: [
        new HTMLWebpackPlugin({
            title: 'restaurant page',
            filename: 'index.html',
            inject: 'head',
            scriptLoading: 'defer',
            template: './src/index.html'
        })
    ],
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }]
    }
}