const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    output: {
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",  
        })
    ],
    devtool: 'inline-source-map',
    module: {
        rules: [
            { test: /\.s?css/, use:['style-loader', 'css-loader', 'sass-loader'] },
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            {
                test: /\.html$/,
                use: [
                  {
                    loader: "html-loader",
                    options: { minimize: true }
                  }
                ]
              },
            { test: /\.(png|jpg|gif)$/, loader: 'file-loader', options: {} }
        ]
    },
    devServer: {
        historyApiFallback: true,
    },
};






