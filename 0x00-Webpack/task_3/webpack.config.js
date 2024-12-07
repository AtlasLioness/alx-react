const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: {
		all: [
			'./modules/header/header.js',
			'./modules/body/body.js',
			'./modules/footer/footer.js'
		],
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'public')
	},
	devtool: 'inline-source-map',
	devServer: {
		static: path.resolve(__dirname, './public'),
		port: 8564,
		open: true,
	},
	performance: {
		hints: false,
		maxEntrypointSize: 512000,
		maxAssetSize: 512000,
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"]
			},
			{
				test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
				use: [
					"file-loader",
					{
						loader: "image-webpack-loader",
						options: {
							bypassOnDebu: true,
							disable: true,
						},
					},
				],
			},
		],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin()
	],
	optimization: {
		splitChunks: {
			chunks: 'all'
		}
	}
};
