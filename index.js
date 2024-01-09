//Import the files needed in the index.js => Inquirer for prompt functions
const { writeFile } = require('fs/promises');
const inquirer = require('inquirer');
const { Shape }= require('./lib/shapes')

//Assign a constructor class for the svg structure.
class SVG{
    constructor(){
        this.textElement = ''
        this.shapeElement = ''
    }
    render(){
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`
    }
    setTextElement(text, color){
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
    }
    setShapeElement(shape){
        this.shapeElement = Shape;
    }
}

//Validate the prompt written by the user => Up to 3 characters.
const lenghtValidator = async (input) =>{
    if(input.length > 0 && input.length < 4){
        return true
    }else{
        return 'Enter a Valid text'
    }
}

//Prompt questions
const userInput = 
    [
        {
            type: 'input',
            name: 'text',
            message: 'Enter the Text Content of your logo.',
            validate: lenghtValidator
        },
        {
            type: 'input',
            name: 'color',
            message: 'Color of preference.'
        },
        {
            type: 'checkbox',
            name: 'shape',
            message: 'Choose the shape of your preference.',
            choices: [
                'Circle',
                'Triangle',
                'Square'
            ]
        },
        {
            type: 'input',
            name: 'colorShape',
            message: 'Enter the color of your preference.'
        }
    ]

    //Generate a new svg shape
    const shapeSVG = new SVG();
    shapeSVG.setTextElement(userInput.text, userInput.color);
    shapeSVG.setShapeElement(userInput.shape);


    //We call for inquirer.prompt to be prompted in question through the CLI.
    inquirer.prompt(userInput)
    .then((answers)=>{
        console.log(answers)
    })
    //File will be created in the examples folder => currently empty
    .then(()=>{
        return writeFile('./examples/logo.svg', shapeSVG.render())
    })



// const shapeSVG = new Shape();
// shapeSVG.setTextElement(userInput.text, userInput.color);
// shapeSVG.setShapeElement(userInput.shape)  
