/******************************************
 ## Globals - No Windows !!!
- __dirname 	--> Path to current directory;
- __filename	--> File name;
- require		--> Function to use modules (CommonJS);
- module		--> Info about current module (file);
- process		--> Info about env where the program is being executed;
 *******************************************/

console.log(__dirname);
console.log(__filename);

// Event ListJS
setInterval(() => {
    console.log('Hello Jay!!!');
}, 1000); // Time Second