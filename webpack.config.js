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
                test: /\.json$/,
                type: 'asset/source',
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [ 'babel-loader', 'eslint-loader' ]
            },
            {
                test: /\.css$/,
                exclude: /src\/styles/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    require('autoprefixer')
                                ]
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif|ico|jpeg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name]-[hash:8].[ext]',
                    outputPath: 'assets'
                }
            },
            { // todo: gerekli değilse sil kontrol et!
                test: /\.(woff(2)?|eot|ttf|otf)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name][ext]'
                }
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
        })
    ],
};
