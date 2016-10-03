var path = require('path')

var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

var DEMO_DIR = path.resolve(__dirname, 'src/demo')
var SOURCE_DIR = path.resolve(__dirname, 'src')
var ROOT_DIR = path.resolve(__dirname, '')

var env = {
    demo: process.env.DEMO
}

var demoConfig = {
    entry: {
        index: DEMO_DIR + '/demo.jsx'
    },
    module: {
        preLoaders: [{
            test: /\.(js|jsx)$/,
            include: DEMO_DIR,
            loader: 'eslint'
        }],
        loaders: [{
            test: /\.(js|jsx)$/,
            include: SOURCE_DIR,
            loader: 'babel',
            query: {
                presets: ['es2015', 'react', 'stage-0']
            }
        }, {
            test: /\.(css|scss)$/,
            loaders: ['style', 'css?sourceMap', 'sass?sourceMap']
        }]
    },
    plugins: [new HtmlWebpackPlugin({
        template: DEMO_DIR + '/demo.html',
        files: {
            'js': []
        },
        hash: true,
        inject: 'body',
        filename: 'index.html'
    })],
    eslint: {
        failOnWarning: false,
        failOnError: true
    },
    output: {
        path: ROOT_DIR,
        filename: '[name].js'
    }
}

var cssConfig = {
    entry: {
        'build/style': SOURCE_DIR + '/style.js'
    },
    module: {
        loaders: [{
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract(
                'style',
                'css?sourceMap!sass?sourceMap'
            )
        }]
    },
    plugins: [new ExtractTextPlugin('dist/react-components.css')],
    sassLoader: {
        includePaths: ['src/style']
    },
    output: {
        path: ROOT_DIR,
        filename: '[name].js'
    }
}

var rcConfig = {
    entry: {
        'dist/react-components': SOURCE_DIR + '/components.js'
    },
    resolve: {
        root: [SOURCE_DIR],
        extensions: ['', '.js', '.jsx', '.json']
    },
    module: {
        preLoaders: [{
            test: /\.(js|jsx)$/,
            include: SOURCE_DIR,
            loader: 'eslint'
        }],
        loaders: [{
            test: /\.(js|jsx)$/,
            include: SOURCE_DIR,
            loader: 'babel',
            query: {
                presets: ['es2015', 'react', 'stage-0']
            }
        }, {
            test: /\.(css|scss)$/,
            loaders: ['style', 'css?sourceMap', 'sass?sourceMap']
        }]
    },
    devtool: 'source-map',
    externals: {
        'React': 'react',
        'ReactDOM': 'react-dom'
    },
    eslint: {
        failOnWarning: false,
        failOnError: true
    },
    sassLoader: {
        includePaths: ['src/style']
    },
    output: {
        path: ROOT_DIR,
        filename: '[name].js',
        library: 'rc',
        libraryTarget: 'commonjs2'
    }
}

var configs = []

if (env.demo) {
    configs.push(demoConfig)
} else {
    configs.push(rcConfig)
    configs.push(cssConfig)
}

module.exports = configs
