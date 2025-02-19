const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(path.join(__dirname, "tsconfig.json"), [
  /* mapped paths to share */
]);

module.exports = {
  output: {
    uniqueName: "wmfHost",
    publicPath: "auto",
  },
  optimization: {
    runtimeChunk: false,
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      // For remotes (please adjust)
      // name: "wmfHost",
      // filename: "remoteEntry.js",

      // For hosts (please adjust)
      // remotes: {
      //   "wmf-host": "wmf-host@http://localhost:5555/remoteEntry.js",
      //   preversion: "preversion@http://localhost:5558/remoteEntry.js",
      // },
      name: "wmfHost",
      filename: "remoteEntry.js",
      exposes: {
        "./hello": "./src/hello.js",
        "@angular/common": "./node_modules/@angular/common",
      },
      remotes: {
        // wmfHost: "wmfHost@http://localhost:5555/remoteEntry.js",
      },

      shared: share({
        "@angular/core": {
          singleton: true,
          strictVersion: true,
          requiredVersion: "12.2.17",
          //           eager: true,
        },
        "@angular/common": {
          singleton: true,
          strictVersion: true,
          requiredVersion: "12.2.17",
          shareScope: "wmfHost",
          eager: false,
        },
        "@angular/common/http": {
          singleton: true,
          strictVersion: true,
          requiredVersion: "auto",
          //           eager: true,
        },
        "@angular/router": {
          singleton: true,
          strictVersion: true,
          requiredVersion: "12.2.17",
          //           eager: true,
        },
        rxjs: {
          singleton: true,
          strictVersion: true,
          requiredVersion: "6.6.0",
          //           eager: true,
        },

        ...sharedMappings.getDescriptors(),
      }),
    }),
    sharedMappings.getPlugin(),
  ],
};
