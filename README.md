**Autor: Pablo J. Santos --> @JaySaints**

[You_Tube_Channel](Code Addict)
[JohnSmilga](https://www.johnsmilga.com/)
[npmjs](https://www.npmjs.com/)

### Install NodeJS
Step 1: Install NodeJs --> http://nodejs.org

Step 2: Check Installation --> open cmd and write: 
> node ---version  {Return example: v14.17.0}

Step 3: Create new folder named 'NodeJS' and create a fist file .js named 'app.js'

Step 4: Change for directory 
> cd NodeJS

Step 5: Rum app
> node app.js

## Globals - No Windows !!!
- __dirname 	--> Path to current directory;
- __filename	--> File name;
- require		--> Function to use modules (CommonJS);
- module		--> Info about current module (file);
- process		--> Info about env where the program is being executed;

## Modules
- CommonJS, every file is module (by default)
- Modules - Encapsulamented Code (only share minimum)


## npm
// npm - global command, comes with node
> npm --version (6.14.8)

// local dependency - use it only in this particular project
> npm - <packageName>

// global dependency = usi it in any project
> npm install -g <packageName>
>
> sudo npm install -g <packageName> (mac)

## package.json 
// package.json - manifest file (stores important info abaout project/package)
// manual approach (create package.json in the root, create properties etc)
> npm init (step by step, press enter to skip)
>
> npm init -y (everything default)

Install bootstrap
> npm -i bootstrap


## Commands git
> git init
> git aad .
> git commit -m "First-commit"
> git branch -M main
> git remote add origin https://github.com/JaySaints/temp-node-tut.git
> git push -u origin main