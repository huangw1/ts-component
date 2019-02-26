const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry : './demo/index.tsx',
    output: {
        filename  : 'bundle.js',
        path      : path.resolve(__dirname + '/dist'),
        publicPath: '/dist/',
    },

    devtool: 'source-map',

    devServer: {
        port              : 1234,
        historyApiFallback: true,
        inline            : true,
    },

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },

    module : {
        rules: [
            {
                test  : /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            },
            {
                test: /\.scss$/,
                use : [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader : "sass-loader"
                }]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],

    // externals: {
    //     'react'    : 'React',
    //     'react-dom': 'ReactDOM'
    // },
};
