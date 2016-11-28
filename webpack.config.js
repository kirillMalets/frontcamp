module.exports = {
	entry: './js/script.js',
	output: {
		path: './output',
		filename: 'bundle.js'
	},
	module: {
		loaders: [{
			//test: /\.js$/,
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
	}
};