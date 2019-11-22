// webpack.config.js
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {

    entry: {
        pageOne: './src/pageOne/js/index.js',
        pageTwo: './src/pageTwo/js/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ["@babel/preset-env"],
                            plugins: ["@babel/plugin-transform-runtime"]
                        }
                    }
                ]
            },
            // {
            //     test: /\.css$/,
            //     use: [
            //         {
            //             loader: MiniCssExtractPlugin.loader,
            //             options: {}
            //         },
            //         'css-loader'
            //     ]
            // }
            {
                test: /\.s?[ac]ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            url: false,
                            sourceMap: true
                        }
                    },
                    {
                        loader: "sass-loader"
                    }
                ]
            }

        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ]

};