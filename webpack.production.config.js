const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry:{
        main:['babel-polyfill','./src/app.js'],        
        vendors: ['react','react-dom','antd']
    }
    ,
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ["css-loader"]
                })
            },
            {
                test:/\.(js|jsx)$/,
                use:"babel-loader",
                exclude:/node_modules/
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({template:'./src/index.html'}),
        new webpack.optimize.CommonsChunkPlugin({
            name:'vendors',
            filename:'[name][hash:8].js'
        }),
        new ExtractTextPlugin("style.css")
    ]
}