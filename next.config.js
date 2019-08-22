// const withBundleAnalyzer = require("@zeit/next-bundle-analyzer");
const webpack = require('webpack');

const nextConfig = {
  // analyzeServer: ["server", "both"].includes(process.env.BUNDLE_ANALYZE),
  // analyzeBrowser: ["browser", "both"].includes(process.env.BUNDLE_ANALYZE),
  // bundleAnalyzerConfig: {
  //   server: {
  //     analyzerMode: "static",
  //     reportFilename: "../bundles/server.html"
  //   },
  //   browser: {
  //     analyzerMode: "static",
  //     reportFilename: "../bundles/client.html"
  //   }
  // },
  webpack(config) {
    config.plugins.push(
      new webpack.ProvidePlugin({
        // 'd3': 'd3',
        "window.d3": "d3",
        "window.techan": "techan"
        // 'techan': 'techan',

      })
    );
    // config.module.rules.push({
    //   test: /\.js$/,
    //   loader: "ify-loader"
    // });
    return config;
  }
};

module.exports = /* withBundleAnalyzer */(nextConfig);
