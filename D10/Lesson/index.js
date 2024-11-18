//console.log('Hello World');

// Object Sample
/*
const circle = {
    radius: 1,
    location:  {
        x: 1,
        y: 1
    },
    draw: function()  {
        console.log('draw');
    }
};

circle.draw();
*/

// Factory Function
/*
function createCircle(radius)  {
    return  {
        radius, 
        draw: function()  {
            console.log('draw');
        }
    };
}

const circle = createCircle(2)
circle.draw();
*/

// Constructor Function 
/*
function Circle(radius)  {
    this.radius = radius
    this.draw = function()  {
        console.log('draw');
    }
} 

const another = new Circle(2);
*/

// Value Types
/*
Number
String 
Boolean
Symbol
undefined
null

They are copied by value
*/

// Reference Types
/*
Object
Function 
Array

They are copied by reference

*/

// Adding / Removing properties

/*
function Circle(radius)  {
    this.radius = radius
    this.draw = function()  {
        console.log('draw');
    }
} 

const circle = new Circle(2);

circle.location = { x: 1};
circle['location'] = {x : 1};

//delete circle.location;
delete circle['location'];
*/

// Abstraction

// Hide the details and show the essentials

// Getters and Setters
