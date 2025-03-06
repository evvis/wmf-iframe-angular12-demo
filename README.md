# Webpack Module Federation Angular 12 Demo with using iframe

This demo show how to configure and run Angular 12 using Webpack
Module Federation. Some of these projects also have Angular Material 
and ag-grid to show benefits of WMF in comparison with iframe approach. 

## How to run the demo

You need to install dependencies and launch all the projects in this repository:

```
# install and run the host app

cd wmf-host
npm install
npm start

cd ..

# install and run the remote1 app

cd wmf-remote1
npm install

# run host app
npm start

cd ..

# install and run the remote2 app

cd wmf-remote2
npm install
npm start

cd ..

# install and run the iframe app

cd wmf-iframe
npm install
npm start
```

After that, you can open this URL in your favourite browser: `http://localhost:5555`.

To test the iframe functionality, go to `http://localhost:5558`.

When the host application is running, you can see the package source in the network tab. If the host application is unavailable or turned off, the packages will be loaded from the iframe project.

To ensure that the iframe forcibly loads libraries from the host, the `version` of each package in the host’s configuration is set one minor `version` higher (not necessarily an existing one). This workaround eliminates the need for additional actions on the part of child applications.

(I know this is not entirely correct, and I would appreciate any suggestions on how to achieve the same effect in a more elegant and proper way.)

PS.
The repository https://github.com/waysharknite/wmf-angular-12-demo was used as the basis. Thanks to @waysharknite.
