'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');

module.exports = {
	entry: './js/script.js',
	output: {
		path: './output',
		filename: 'bundle.js'
	},
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
			query: {
				presets: ['es2015', 'stage-3']
			}
		},
		{
			test: /\.less$/,
			loader: "style-loader!css-loader!less-loader"
		}]
	},
	plugins: [
		new webpack.EnvironmentPlugin('NODE_ENV')
	],
	watch: NODE_ENV == 'development',
	watchOptions: {
		aggregateTimeout: 200
	},
	devtool: NODE_ENV == 'development' ?'source-map' : null
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