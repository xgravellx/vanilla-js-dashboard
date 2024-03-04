const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: [ './src/app.js' ],
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'app.js',
        publicPath: '/',
        sourceMapFilename: 'app.js.map'
    },
    devtool: 'source-map',
    devServer: {
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [ 'babel-loader', 'eslint-loader' ]
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.(png|svg|jpg|gif|ico)$/,
                loader: 'file-loader',
                options: { name: '[name].[ext]' }
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    sources: false,
                    minimize: false
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'login.html',
            template: 'src/pages/login.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'register.html',
            template: 'src/pages/register.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'dashboard.html',
            template: 'src/pages/dashboard.html'
        }),
    ],
};
