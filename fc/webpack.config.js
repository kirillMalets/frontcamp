'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');
const path = require('path');

module.exports = {
	entry: {
		react: './client/app.js',
		angular: './public/admin/js/app.js'
	},
	output: {
		path: path.join('./public', "javascript"),
		publicPath: '/public/javascript/',
		filename: "[name].bundle.js",
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'react', 'stage-3']
				}
		},
		{
			test: /\.html$/,
			loader: 'ngtemplate?relativeTo=' + (path.resolve(__dirname, './public/admin')) + '/!html'
		}
			/*,
		{
			test: /\.less$/,
			loader: "style-loader!css-loader!less-loader"
		}*/]
	},
	plugins: [
		new webpack.EnvironmentPlugin('NODE_ENV')
	],
	watch: NODE_ENV == 'development',
	watchOptions: {
		aggregateTimeout: 200
	},
	devtool: NODE_ENV == 'development' ?'eval' : null
};

if (NODE_ENV == 'production') {
	module.exports.plugins.push(
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false,
				drop_console: true
			}
		})
	);
}