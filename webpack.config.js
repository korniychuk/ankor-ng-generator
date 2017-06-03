const path = require('path');
const nodeExternals = require('webpack-node-externals');

function root(relativePath) {
  return path.resolve(__dirname, relativePath);
}

const config = {
  entry: {
    main: './main.ts',
  },

  resolve: {
    extensions: [ '.ts', '.js', '.json', '.template' ],
    modules: [ root('src'), root('node_modules') ],
  },

  output: {

    path: root('dist'),
    filename: '[name].js',
    //libraryTarget: 'commonjs2',
  },

  module: {

    rules: [
      {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader',
        options: {
          configFileName: 'tsconfig.webpack.json',
          useCache: true,
        },
        exclude: /node_modules/,
      },


      {
        test: /\.template$/,
        use: 'raw-loader',
        exclude: /node_modules/,
      },

      /**
       * Json loader support for *.json files.
       *
       * See: https://github.com/webpack/json-loader
       */
      {
        test: /\.json$/,
        use: 'json-loader'
      },
    ],

  },

  context: path.resolve(__dirname, 'src'),
  target: 'node',
  node: {
    __filename: false,
    __dirname: false,
  },
  externals: [nodeExternals()],
};

module.exports = config;
