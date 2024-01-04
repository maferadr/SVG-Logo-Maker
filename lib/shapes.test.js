const {Circle, Square, Triangle} = require('./shapes');
//Imports the shapes classes from the shape.js module and test if they're working properly.

//Circle Shape test
describe('Circle', ()=>{
    test('Renders Correctly', () => {
        const shape = new Circle();
        let color = ('blue');
        shape.setColor(color);
        expect(shape.render().toEqual(`<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}">`));
    });
})

//Square Shape
describe('Square', ()=>{
    test('Renders correctly', ()=>{
        const shape = new Square();
        let color = ('green');
        shape.setColor(color);
        expect(shape.render().toEqual(`<rect x="50" height="200" width="200" fill="${this.color}">`))
    })
});

//Triangle Shape
describe('Triangle', () => {
    test('Renders correctly', ()=>{
        const shape = new Triangle;
        let color = ('blue');
        shape.setColor(color);
        expect(shape.render().toEqual(`<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.color}">`))
    })
});