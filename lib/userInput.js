//Tools needed are being imported. Index.js files has the initialize functions to run the application.
const inquirer = require('inquirer');
const { join } = require('path');
const {writeFile} = require('fs/promises');
const {Circle, Triangle, Square } = require('./shapes');

//It has to ask for color as a keyword, text, shape, color shape
//Bear in mind to check for hexadecimal values
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
        this.shapeElement = shape.render()
    }
}

//Array of userInput that is going to define each question prompted on the CLI
const userInput = 
    [
        {
            type: 'input',
            name: 'text',
            message: 'Enter the Text Content of your logo.'
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

function run(){
    const answers = inquirer.prompt(userInput)


    let userText = '';
    if(answers.text.length > 0 && answers.text.length < 4){
        userText = answers.text;
    }
    else{
        console.log('Enter a valid User Text.')
    }

    let userFontColor = answers.color;
    let userShapeType = answers.shape;
    let userShapeColor = answers.colorShape;
    
    //If statement to confirm if the user is prompting the right option
    let userShape = '';
    userShapeType === 'Circle'  ? userShape = new Circle() :
    userShapeType === 'Triangle' ? userShape = new Triangle() :
    userShapeType === 'Square'  ? userShape = new Square() :
    console.log('Please select and option')

    userShape.setColor(userShapeColor);

    const shapeSVG = new SVG();
    shapeSVG.setTextElement(userText, userFontColor);
    shapeSVG.setShapeElement(userShape);

}
//It is going to execute a writeFile function through promises to generate the logo.svg
run()
.then(()=>{
    return writeFile(
        join(__dirname, 'logo.svg', shapeSVG.render())
    )
})

module.exports = SVG;
module.exports = userInput;