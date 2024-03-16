// npm - global command,comes with node 
//npm --version

//local dependency - use it only in this particular project (local dependency means we will use the particular npm package in that particular project)
//npm i <packageName> -command to install as local dependency 

//global dependency - use it only in this particular project (gloaval dependency means we can use it in any projec)
//npm install -g <packageName> -command to install as global dependency

//package.json - manifest file(stores important info about project/package)name should be unique no other file in root related directory should have package name
// to create package.json: 
//1) manual appraoch (create package.json in the root(always create it in the root), then create each properties etc.)
//2) npm init (step by step asks you the questions , press enter to skip)
//3) npm init -y (everything default) make package.json file automatically 
//some packages also require additional dependency that will be installed automatically. But, in package.json file we will get to see only dependencies which we have installed to use.

//we can install package as devloper dependencies also in package.json files.
//command-  npm i nodemon (--save-dev or -D)

// we can add scripts to package.json and   instead of using node app.js we can directly use node start

// to uninstall package command is - npm uninstall packageName