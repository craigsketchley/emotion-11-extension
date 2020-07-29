const path = require('path');

const SOURCE_DIR = 'src'
const DIST_DIR = 'dist'

module.exports = {
  entry: path.resolve(__dirname, SOURCE_DIR, 'content.js'),
  output: {
    filename: 'content.bundle.js',
    path: path.resolve(__dirname, DIST_DIR),
  }
}
