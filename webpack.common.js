
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack");
const CopyWebpackPlugin = require('copy-webpack-plugin');

//for beauty code html afer render
const HtmlBeautifyPlugin = require('html-beautify-webpack-plugin');

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
				exclude: /node_modules/
			}
		]
	},
	plugins: [

		//for css
		new ExtractTextPlugin({
			filename: "styles/style.bundle.css"
		}), 

		//for assets/images
		new CopyWebpackPlugin([
			{ from: './src/assets', to:'./assets'},
		]),
		new HtmlBeautifyPlugin(),
		new HtmlWebpackPlugin({
			hash: true,
			template: './src/template/index.html',
			filename:  'index.html',
			favicon: './src/assets/dog.png'
		}),
		new HtmlWebpackPlugin({
			hash: true,
			template: './src/template/page1.html',
			filename:  'page1.html'
		}),
		new HtmlWebpackPlugin({
			hash: true,
			template: './src/template/404.html',
			filename:  '404.html'
		}),
	
    ]
};