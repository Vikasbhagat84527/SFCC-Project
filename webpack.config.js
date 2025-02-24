const path = require('path');

module.exports = {
  entry: './cartridges/sfcc_dev_tools/scripts/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'cartridges/sfcc_dev_tools/static/js')
  },
  mode: 'development'
};
