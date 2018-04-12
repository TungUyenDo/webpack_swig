
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  	entry:{
		  script :  './src/scripts/index.js',
  	},
  	devtool : "eval",
	output: {
		filename: 'scripts/[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
	    loaders: [
			{ test: /\.scss$/, loader: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'sass-loader']
				})
			},
			{ 
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				}
			},
			{ 
				test: /\.html$/,
				exclude: /node_modules/,
				loader : "swig-loader"
			},
			{
				test: /\.(png|jpg|svg|gif)$/,
				use: {
					loader: 'url-loader',
					options: {
						// limit: 10000,
						name: "[name].[hash].[ext]",
						outputPath: './assets/images',
					 }
				}
			}
		]
	},
	plugins: [
		new ExtractTextPlugin({
			filename: "styles/style.bundle.css"
		}), 
		new HtmlWebpackPlugin({
			hash: true,
			template: './src/template/index.html',
			filename:  'index.html',
			title:'Pug Webpack',
		}),
	
    ]
};