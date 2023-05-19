const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); 
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');


module.exports = {

    entry: {
        'app': './src/index.js',
},

    output: {

        publicPath: '/',
        path: path.join(__dirname, 'app'),
        filename: 'app.js'

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
        }),
        new HtmlWebpackPlugin({
            filename: 'components/button.html',
            template: './src/components/button.html',
        }),
        new HtmlWebpackPlugin({
            filename: 'components/textfield.html',
            template: './src/components/textfield.html',
        }),
    ],
}