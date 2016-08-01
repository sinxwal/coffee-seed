const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: [
        './src/app.js',
        'bootstrap-webpack!./src/bootstrap.config.js'
    ],
    output: {
        path: './bin/',
        filename: 'bundle.js',
        publicPath: "./bin/"
    },
    module: {
        loaders: [
			{ 
				test: /\.(woff|woff2)$/,  
				loader: "url?limit=10000&mimetype=application/font-woff"
			},
			{ 
				test: /\.ttf$/,    loader: "file"
			},
			{ 
				test: /\.eot$/,    loader: "file"
			},
			{ 
				test: /\.svg$/,    loader: "file"
			},
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel'
			},
			{
				test: /\.(css|less)$/, 
				loader: ExtractTextPlugin.extract('style', 'css!less')
			},
		]
	},
    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.DedupePlugin(),
        new ExtractTextPlugin('bundle.css'),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false,
            mangle: false,
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            }
        })
    ],
    stats: { colors: true },
    devServer: {
        port: 8181,
        contentBase: './',
    }
};
