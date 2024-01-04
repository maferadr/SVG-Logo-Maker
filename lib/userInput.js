const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');

//It has to ask for color as a keyword, text, shape, color shape
//Bear in mind to check for hexadecimal values
class userInput{
    constructor(){
        this.textElement = '',
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
    run(){
     return inquirer
        .prompt([
            {
                type: 'input',
                name: 'text',
                message: 'Enter the Text Content of your logo.'
            },
            {
                type: 'input',
                name: 'color',
                message: 'Color of preference.'
            },{
                type: 'checkbox',
                name: 'shape',
                message: 'Choose the shape of your preference.',
                choices: [
                    'Circle',
                    'Triangle',
                    'Square'
                ]
            },{
                type: 'input',
                name: 'colorShape',
                message: 'Enter the color of your preference.'
            },
        ])
        .then(({text, color, shape, colorShape})=>{
            this.text = text,
            this.color = color,
            this.shape = shape,
            this.colorShape = colorShape
        })
        .then(()=>{
            this.text = () =>
                text.length > 0 && text.length < 4 ? console.log('Valid character') : console.log('It has to be up to 3 characters.');
            //fsPromises.writeFile( file, data, options )
            return writeFile(
                join(__dirname, ('..', '/examples', 'logo.svg')),
                console.log('Created logo.svg')
            )
        })
        .catch((err)=>{
            console.log(err);
            console.log('Ooops something went wrong.')
        })
    }
}

module.exports = userInput;