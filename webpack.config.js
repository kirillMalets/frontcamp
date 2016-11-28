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
			loader: "style-loader!less-loader!css-loader"
		}]
	},
	watch: true,
	watchOptions: {
		aggregateTimeout: 200
	},
	//devtool: 'source-map'
};