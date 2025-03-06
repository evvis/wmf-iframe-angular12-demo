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
      exposes: {
        "./RootModule": "./src/features/root/root.module.ts",
      },
      remotes: {
        wmfHost: "wmfHost@http://localhost:5555/remoteEntry.js",
      },

      shared: share({
        "@angular/animations": {
          singleton: true,
          requiredVersion: "~12.2.17",
        },
        "@angular/common": {
          singleton: true,
          requiredVersion: "~12.2.17",
        },
        "@angular/compiler": {
          singleton: true,
          requiredVersion: "~12.2.17",
        },
        "@angular/core": {
          singleton: true,
          requiredVersion: "~12.2.17",
        },
        "@angular/forms": {
          singleton: true,
          requiredVersion: "~12.2.17",
        },
        "@angular/platform-browser": {
          singleton: true,
          requiredVersion: "~12.2.17",
        },
        "@angular/platform-browser-dynamic": {
          singleton: true,
          requiredVersion: "~12.2.17",
        },
        "@angular/router": {
          singleton: true,
          requiredVersion: "~12.2.17",
        },
        rxjs: {
          singleton: true,
          requiredVersion: "~6.6.0",
        },
        "@ag-grid-community/core": {
          singleton: true,
          requiredVersion: "~25.0.1",
        },
        "@ag-grid-community/angular": {
          singleton: true,
          requiredVersion: "~25.0.1",
        },
        "@ag-grid-community/client-side-row-model": {
          singleton: true,
          requiredVersion: "~25.0.1",
        },
        "@ag-grid-enterprise/all-modules": {
          singleton: true,
          requiredVersion: "~25.0.1",
        },
      }),
    }),
    sharedMappings.getPlugin(),
  ],
};
