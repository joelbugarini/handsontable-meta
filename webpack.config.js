
module.exports = {
  entry: './src/main.ts',
  output: {
    filename: 'dist/handsontable-meta.min.js'
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
  },
  module: {
    loaders: [
      { test: /\.ts?$/, loader: 'ts-loader' }
    ]
  },
  externals:{
    handsontable: "Handsontable"
  }
}
