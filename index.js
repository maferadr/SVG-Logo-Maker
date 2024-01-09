//We call for the main file in which the user is going to generate de SVG.
const { writeFile } = require('fs/promises');
const inquirer = require('inquirer');
const { Shape }= require('./lib/shapes')

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

const lenghtValidator = async (input) =>{
    if(input.length > 0 && input.length < 4){
        return true
    }else{
        return 'Enter a Valid text'
    }
}

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

    const shapeSVG = new SVG();
    shapeSVG.setTextElement(userInput.text, userInput.color);
    shapeSVG.setShapeElement(userInput.shape);


    inquirer.prompt(userInput)
    .then((answers)=>{
        console.log(answers)
    })
    .then(()=>{
        return writeFile('./examples/logo.svg', shapeSVG.render())
    })



// const shapeSVG = new Shape();
// shapeSVG.setTextElement(userInput.text, userInput.color);
// shapeSVG.setShapeElement(userInput.shape)  
