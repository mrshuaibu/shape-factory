'use strict';

class Shape {
    constructor(name, colour) {
        this._name = name;
        this._colour = colour;
    }

    get name() {
        return this._name;
    }

    get colour() {
        return this._colour;
    }

    getInfo() {
        return `Shape: ${this.name}, Colour: ${this.colour}`;
    }
}

const shapesArray = [];

function newShape() {
    if (shapesArray.length >= 20) {
        document.querySelector('.shape-info').textContent = "Storage is full";
        return; 
    }
    
    const shapeType = document.querySelector('.selector .choices').value;
    const shapeClass = shapeType === 'option1' ? 'circle' : 'square'; 
    const color = document.querySelector('.colors').value;
    
    const shape = new Shape(shapeClass, color);
    shapesArray.push(shape);
    
    document.querySelector('.shape-info').textContent = shape.getInfo();

    const shapeElement = document.createElement('div');
    shapeElement.classList.add(shapeClass);
    shapeElement.style.backgroundColor = color.toLowerCase();
    
    document.querySelector('.box').appendChild(shapeElement);
}

document.querySelector('.create-button').addEventListener('click', newShape);