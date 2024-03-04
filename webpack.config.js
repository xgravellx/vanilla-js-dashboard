const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin')

const port = 3000;
let publicUrl = `http://localhost:${port}`;
if(process.env.GITPOD_WORKSPACE_URL){
    const [schema, host] = process.env.GITPOD_WORKSPACE_URL.split('://');
    publicUrl = `${port}-${host}`;
}

module.exports = {
    mode: 'development',
    entry: ['./src/app.js'],
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'main.bundle.js',
        sourceMapFilename: '[name].js.map'
    },
    devtool: "source-map",
    devServer: {
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
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
                    minimize: false,
                },
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "src/index.html"
        }),
    ]
};
