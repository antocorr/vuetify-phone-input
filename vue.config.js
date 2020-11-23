const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  configureWebpack: {
    externals: { 'vuetify/lib': 'vuetify/lib' },
    plugins: [
      new BundleAnalyzerPlugin()
    ]
  },
  css: {
    extract: false,
  },
};
