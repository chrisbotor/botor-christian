// Step 1: Create an array called 'students' with three objects representing student information.

// Each student object should have properties: 'name', 'age', and 'grade'.

const students = [

    {
        name: 'Chris Botor',
        age: 49,
        grade : 88
    },

    {
        name: 'Racs Botor',
        age: 41,
        grade : 95
    },

    {
        name: 'Carl Russel Botor',
        age: 9,
        grade : 99
    }


]

// Step 2: Access the name of the second student in the 'students' array and log it to the console.

console.log('Student 2 : ' , students[0]);

// Step 3: Add a new student object to the 'students' array.

// The new student should have properties: 'name', 'age', and 'grade'.

//students.pop()
let myNewStudent = {name: 'Precy', age: 62, grade: 99}

students.push(myNewStudent)

//console.log('length = ', students.length)
console.log(students[students.length - 1])


// Step 4: Loop through the 'students' array and log each student's name and grade to the console.

students.forEach(getDataStudents)

function getDataStudents(item, index)  {
    console.log('index:', index)
    console.log('item: ', item)
    //console.log(students)
}

// Step 5: Create an object called 'book' with properties 'title', 'author', and 'year'.

let book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,

    getSummary: function() {
        return `${this.title} was written by ${this.author} in ${this.year}.`;
      }

    };  
  console.log(book);

// Step 6: Access the title of the 'book' object and log it to the console.
console.log(book.title)

// Step 7: Update the 'year' property of the 'book' object to 1930.
book.year = 1930
console.log(book);


// Step 8: Create a method called 'getSummary' for the 'book' object.
// The method should return a string summarizing the book's title, author, and year.

//getSummary: function() {
//    return `${this.title} was written by ${this.author} in ${this.year}.`;
//  }


// Step 9: Call the 'getSummary' method of the 'book' object and log the result to the console.

book.getSummary()

// Step 10: Create an array called 'library' and add the 'book' object to it.

let library = [book]

// Step 11: Log the 'library' array to the console to verify the book is stored in the array.

console.log('Library :', library)

// Step 12: Create an object called 'car' with properties 'brand', 'model', and 'year'.

let car =  
    {
        brand : 'mazda',
        model : '3',
        year : 2009,

        startEngine: function() {
            return `${this.brand} ${this.model}'s engine has started.`;
          }
    }    

console.log(car)    

// Step 13: Access the 'model' property of the 'car' object and log it to the console.

console.log('Car model :', car.model)

// Step 14: Update the 'year' property of the 'car' object to 2023.

car.year = '2019'
console.log('Car year :', car.year)


// Step 15: Create a method called 'startEngine' for the 'car' object.
console.log(car.startEngine())

// The method should log a message to the console indicating that the car's engine is starting.

// Step 16: Call the 'startEngine' method of the 'car' object.

// Step 17: Create an array called 'garage' and add the 'car' object to it.
let garage = [];

// Add the car object to the garage array
garage.push(car);

console.log(garage);


// Step 18: Log the 'garage' array to the console to verify the car is stored in the array.

// Step 19: Create an object called 'person' with properties 'name', 'age', and 'city'.

// Step 20: Access the 'age' property of the 'person' object and log it to the console.

// Feel free to add more steps or customize the activity according to your needs.

