// const withBundleAnalyzer = require("@zeit/next-bundle-analyzer");

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
    // config.module.rules.push({
    //   test: /\.js$/,
    //   loader: "ify-loader"
    // });
    return config;
  }
};

module.exports = /* withBundleAnalyzer */(nextConfig);
