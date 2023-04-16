# Server Side Rendering Fundamentals

> This is a small project built using webpack and express to showcase how a react project can be server side rendered and hydrated on client side.

## Project Structure

* The ```src``` folder contains all the React components and the main ```app``` component.
  * The root ```index.js``` file is ran on the server side which creates the initial html structure.
  * The public folder contains the client side rendered ```index.js``` which hydrates the html contents in the root document.
* The ```configs``` folder which contains the configuration for webpack.
* The ```server``` folder contains:
    * ```build.js``` for creating the server side and client side bundles.
    * ```index.js``` for starting the server.

## How to run:
* You can run commands ```npm ci``` and then ```npm start``` to start the server. The contents will be served at ```localhost:9000```.
