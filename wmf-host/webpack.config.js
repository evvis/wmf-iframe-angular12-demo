const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(path.join(__dirname, "tsconfig.json"), [
  /* mapped paths to share */
]);

// Полный список библиотек
const sharedConfig = {
  "@angular/animations": {
    singleton: true,
    strictVersion: true,
    requiredVersion: "~12.2.17",
    version: "12.2.18",
  },
  "@angular/common": {
    singleton: true,
    strictVersion: true,
    requiredVersion: "~12.2.17",
    version: "12.2.18",
  },
  "@angular/compiler": {
    singleton: true,
    strictVersion: true,
    requiredVersion: "~12.2.17",
    version: "12.2.18",
  },
  "@angular/core": {
    singleton: true,
    strictVersion: true,
    requiredVersion: "~12.2.17",
    version: "12.2.18",
  },
  "@angular/forms": {
    singleton: true,
    strictVersion: true,
    requiredVersion: "~12.2.17",
    version: "12.2.18",
  },
  "@angular/platform-browser": {
    singleton: true,
    strictVersion: true,
    requiredVersion: "~12.2.17",
    version: "12.2.18",
  },
  "@angular/platform-browser-dynamic": {
    singleton: true,
    strictVersion: true,
    requiredVersion: "~12.2.17",
    version: "12.2.18",
  },
  "@angular/router": {
    singleton: true,
    strictVersion: true,
    requiredVersion: "~12.2.17",
    version: "12.2.18",
  },
  "@ag-grid-community/core": {
    singleton: true,
    strictVersion: true,
    requiredVersion: "~25.0.1",
    version: "25.0.2",
  },
  "@ag-grid-community/angular": {
    singleton: true,
    strictVersion: true,
    requiredVersion: "~25.0.1",
    version: "25.0.2",
  },
  "@ag-grid-community/client-side-row-model": {
    singleton: true,
    strictVersion: true,
    requiredVersion: "~25.0.1",
    version: "25.0.2",
  },
  "@ag-grid-enterprise/all-modules": {
    singleton: true,
    strictVersion: true,
    requiredVersion: "~25.0.1",
    version: "25.0.2",
  },
  rxjs: {
    singleton: true,
    strictVersion: true,
    requiredVersion: "~6.6.0",
    version: "6.6.1",
  },
};

module.exports = {
  output: {
    uniqueName: "wmfHost",
    publicPath: "auto",
  },
  optimization: {
    runtimeChunk: false,
    minimize: true,
  },
  mode: "development",
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "wmfHost",
      filename: "remoteEntry.js",
      exposes: {
        "./mf-angular": "./src/mf-angular.version.js",
      },
      remotes: {},
      shared: share({
        ...sharedConfig,
        ...sharedMappings.getDescriptors(),
      }),
    }),
    sharedMappings.getPlugin(),
  ],
};
