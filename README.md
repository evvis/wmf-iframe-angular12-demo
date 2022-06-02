# Webpack Module Federation Angular 12 Demo

---

This demo show how to configure and run Angular 12 using Webpack
Module Federation. Some of these projects also have Angular Material 
to show benefits of WMF in comparison with iframe approach. 

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
