const ExtractTextPlugin = require('extract-text-webpack-plugin');

// importLoader:1 from https://blog.madewithenvy.com/webpack-2-postcss-cssnext-fdcd2fd7d0bd

module.exports = {
    devtool: 'source-map', // 'cheap-module-eval-source-map'
    module: {
        rules: [{
            test: /\.css$/,
            use: ExtractTextPlugin.extract([
                {
                    loader: 'css-loader',
                    options: { importLoaders: 1 },
                },
                'postcss-loader']
            )
        }, {
            test: /\.sass/,
            use: ExtractTextPlugin.extract([
                {
                    loader: 'css-loader',
                    options: { importLoaders: 1 },
                },
                'postcss-loader',
                {
                    loader: 'sass-loader',
                    options: {
                        data: `@import "${__dirname}/../src/static/styles/config/_variables.sass";`
                    }
                }]
            )
        }],
    },
    plugins: [
        new ExtractTextPlugin('styles/[name].css')
    ]
};
