const path = require('path');

module.exports = env => ({
  mode: env.prod ? 'production' : 'development',
  entry: path.resolve(__dirname, 'src/entry.js'),
  output: {
    library: 'pipe',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    path: path.resolve(__dirname, 'dist'),
    filename: env.prod ? 'pipe.min.js' : 'pipe.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
});
