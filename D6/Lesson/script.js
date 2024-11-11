// Introduction to Arrays

// Creating an Array

let fruits = ['apple','banana','orange']

//Accessing Array 
console.log('First Fruit : ', fruits[0])
console.log('Second Fruit : ', fruits[1])
console.log('Third Fruit : ', fruits[2])

//Modify Arrays
fruits[1] = 'grape'
fruits.push('strawberry')
fruits.pop();


//Array Iteration

let numbers = [1, 2, 3, 4, 5]
for (let i = 0; i < numbers.length; i++)  {
    console.log(numbers[i])
}

let colors = ['red', 'green', 'blue'];

colors.forEach(function(color) {
    console.log(color)
})

// Length
console.log('Arrat Length :', numbers.length)

//indexof
console.log('Index of 3 :', numbers.indexOf(3))

//includes
console.log('Includes 5:', numbers.includes(5))

//join
console.log('Joined Array', numbers.join(' - '))

//slice
let slicedArray = numbers.slice(1, 4)
console.log('Sliced Array : ', slicedArray)


// Object Literals

const person = {
    Firstname: 'John',
    Lastname: 'Doe',
    age : 43,
    hobbies : ['reading, coding, hiking'],

    greet: function()  {
        console.log(`Hello, my name is ${this.Firstname}`)
    }
};

const students = [

    {
        name: 'John Doe',
        age: 18,
        grade : 12
    },

    {
        name: 'Jane Smith',
        age: 17,
        grade : 11
    },

    {
        name: 'Tom Johnson',
        age: 18,
        grade : 12
    }


]

console.log(students[1].name)


// Defining a function
function greet()  {
    console.log('Hello Function')
}

// FUnction Declaration vs Function Expression 
function squareDeclaration(num)  {
    return num * num;
}
