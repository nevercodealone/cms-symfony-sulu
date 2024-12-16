const path = require("path");
const webpackConfig = require("../../vendor/sulu/sulu/webpack.config.js");
module.exports = (env, argv) => {
  env = env ? env : {};
  argv = argv ? argv : {};
  env.project_root_path = path.resolve(__dirname, "..", "..");
  env.node_modules_path = path.resolve(__dirname, "node_modules");
  const config = webpackConfig(env, argv);
  config.entry = path.resolve(__dirname, "index.js");
  config.module.rules = config.module.rules.filter(
    (rule) => !(rule.test && rule.test.toString() === /\.js$/.toString())
  );
  // add back whatever was defined in vendor webpack config plus the exclusion of jsrouting-bundle
  config.module.rules.push({
    test: /\.js$/,
    // eslint-disable-next-line max-len
    exclude: [
      /node_modules[/\\](?!(sulu-(.*)-bundle|@ckeditor|ckeditor5|array-move|htmlparser2|lodash-es|@react-leaflet|react-leaflet)[/\\])/,
      /friendsofsymfony\/jsrouting-bundle/,
    ],
    use: {
      loader: "babel-loader",
      options: {
        cacheDirectory: true,
        cacheCompression: false,
      },
    },
  });
  return config;
};
