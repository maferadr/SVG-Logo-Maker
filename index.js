//We call for the main file in which the user is going to generate de SVG.
const userInput = require('./lib/userInput');

const svgGenerator = new userInput();

svgGenerator.run();