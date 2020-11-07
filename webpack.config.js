const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV || 'production',
  entry: './src/javascripts/app.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'public/javascripts')
  }
}
