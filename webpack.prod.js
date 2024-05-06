const path = require('path');

module.exports = {
  mode: 'production',
  entry: './js/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, './'),
  },
};