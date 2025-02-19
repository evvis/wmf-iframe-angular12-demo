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
    uniqueName: "wmfIframe",
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
      name: "wmfIframe",
      filename: "remoteEntry.js",
      // exposes: {
      //   "./AppModule": "./src/app/app.module.ts",
      // },
      // exposes: {

      // },
      remotes: {
        wmfHost: "wmfHost@http://localhost:5555/remoteEntry.js",
      },
      shared: share({
        "@angular/core": {
          singleton: true,
          strictVersion: true,
          requiredVersion: "12.2.17",
          // eager: false,
        },
        "@angular/common": {
          singleton: true,
          strictVersion: true,
          requiredVersion: "12.2.17",
          shareScope: "wmfHost",
          eager: false,
        },
        "@angular/router": {
          singleton: true,
          strictVersion: true,
          requiredVersion: "12.2.17",
          // eager: false,
        },
        rxjs: {
          singleton: true,
          strictVersion: true,
          requiredVersion: "6.6.0",
          // eager: false,
        },
        ...sharedMappings.getDescriptors(),
      }),
    }),
  ],
};
