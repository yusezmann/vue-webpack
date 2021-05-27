414243
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      // rule untuk memuat file .vue
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      // rule untuk memuat file .js & 
      // menjalankan script di dalam file .vue
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      // rule untuk memuat file .css &
      // menjalankan style di dalam file .vue
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
};