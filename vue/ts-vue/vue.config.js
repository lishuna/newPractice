/**
 * @author lishuna
 * @date  2019-05-23:19:34
 * @version 3.1.0.0
 * @desc
 */
import fs from 'fs';

module.exports = {
  // 选项...
  publicPath: './',
  outputDir: 'dist',
  assetsDir: './src/assets',
  devServer: {
    host: '0.0.0.0',
    port: 3002,
    before: function(app, server) {
      app.post('*.json', function(req, res) {

        res.json(fs.readFileSync(''));
      });
    },
    hot: true
  }
};
