const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); 
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');


module.exports = {

    entry: {
        'app': './src/index.js',
        'assets/js/banner': './src/assets/js/banner.js',
        'assets/js/tabs': './src/assets/js/tabs.js',
        'assets/js/upload': './src/assets/js/upload.js',
        'assets/js/chart': './src/assets/js/chart.js',
},

    output: {

        publicPath: '/',
        path: path.join(__dirname, 'app'),
        filename: '[name].js'

    },

    devServer: {

        contentBase: path.join(__dirname,"/app"),
        port: 8080,
        writeToDisk: true,
        open: true,

    },


    
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            },
            {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(sass|css|scss)$/,

                use: [
    
                MiniCssExtractPlugin.loader,

                "css-loader",
                "postcss-loader",
                "sass-loader",
    
                ],
    
            },
            {

                test: /\.(svg|eot|woff|woff2|ttf)$/,
        
                exclude: /images/, //استبعاد الصور المحتمل ان تكون بصيغة svg لكي لا يتم تحزيمها الى ملف الخطوط
        
                use: [
        
                    {
        
                        loader: "file-loader", 
            
                        options: {
            
                        name: '[name].[ext]',
        
                        outputPath: "assets/fonts",
            
                        }
        
                    }
        
                ]
        
            },
            {
                test: /\.(png|svg|jpe?g|gif)$/,
                exclude: /fonts/,
                use: [
                {
                    loader: "file-loader",
                    options: {
                    name: "[name].[ext]",
                    outputPath: "assets/images",
                },
                },
                ],
            },
        
        ]
    },
    plugins: [
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false}),
        new OptimizeCSSAssetsPlugin({}),
        new MiniCssExtractPlugin({
            filename: "assets/css/style.css"
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
            chunks: ['app']
        }),
        new HtmlWebpackPlugin({
            filename: 'components/button.html',
            template: './src/components/button.html',
            chunks: ['app']
        }),
        new HtmlWebpackPlugin({
            filename: 'components/textfield.html',
            template: './src/components/textfield.html',
            chunks: ['app']
        }),
        new HtmlWebpackPlugin({
            filename: 'components/card.html',
            template: './src/components/card.html',
            chunks: ['app']
        }),
        new HtmlWebpackPlugin({
            filename: 'components/list.html',
            template: './src/components/list.html',
            chunks: ['app']
        }),
        new HtmlWebpackPlugin({
            filename: 'components/tabs.html',
            template: './src/components/tabs.html',
            chunks: ['app', 'assets/js/tabs']
        }),
        new HtmlWebpackPlugin({
            filename: 'components/banner.html',
            template: './src/components/banner.html',
            chunks: ['app', 'assets/js/banner']
        }),
        new HtmlWebpackPlugin({
            filename: 'components/upload.html',
            template: './src/components/upload.html',
            chunks: ['app', 'assets/js/upload']
        }),
        new HtmlWebpackPlugin({
            filename: 'components/help.html',
            template: './src/components/help.html',
            chunks: ['app']
        }),
        new HtmlWebpackPlugin({
            filename: 'components/summary.html',
            template: './src/components/summary.html',
            chunks: ['app']
        }),
        new HtmlWebpackPlugin({
            filename: 'components/action.html',
            template: './src/components/action.html',
            chunks: ['app']
        }),
        new HtmlWebpackPlugin({
            filename: 'components/sidebar.html',
            template: './src/components/sidebar.html',
            chunks: ['app']
        }),
        new HtmlWebpackPlugin({
            filename: 'components/table.html',
            template: './src/components/table.html',
            chunks: ['app']
        }),
        new HtmlWebpackPlugin({
            filename: 'components/chart.html',
            template: './src/components/chart.html',
            chunks: ['app', 'assets/js/chart']
        }),
    ],
}