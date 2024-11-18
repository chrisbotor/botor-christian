class Book {
    constructor(title, author, genre, availability) {
      this.title = title; // Title of the book (string)
      this.author = author; // Author of the book (string)
      this.genre = genre; // Genre of the book (string)
      this.availability = availability; // Availability of the book (boolean)
    }
  
    // Method to check if the book is available
    isAvailable() {
      return this.availability;
    }
  
    // Method to borrow the book
    borrowBook() {
      if (this.availability) {
        this.availability = false;
        console.log(`${this.title} has been borrowed.`);
      } else {
        console.log(`${this.title} is not available.`);
      }
    }
  
    // Method to return the book
    returnBook() {
      this.availability = true;
      console.log(`${this.title} has been returned.`);
    }

    // Method to display book details 
    displayDetails() {
        console.log("Book Details:");
        console.log(`Title: ${this.title}`);
        console.log(`Author: ${this.author}`);
        console.log(`Genre: ${this.genre}`);
        console.log(`Availability: ${this.availability ? "Available" : "Not Available"}`);
      }
  }
  
  // Example usage:
  const myBook = new Book("The Great Gatsby", "F. Scott Fitzgerald", "Fiction", true);
  
  console.log(myBook.title); // "The Great Gatsby"
  console.log(myBook.isAvailable()); // true
  
  myBook.borrowBook(); // "The Great Gatsby has been borrowed."
  console.log(myBook.isAvailable()); // false
  
  myBook.returnBook(); // "The Great Gatsby has been returned."
  console.log(myBook.isAvailable()); // true

  myBook.displayDetails();


  class Library {
    constructor() {
      this.books = []; // Array to store the list of books
    }
  
    // Method to add a new book to the library
    addBook(title, author, genre) {
      const newBook = new Book(title, author, genre);
      this.books.push(newBook);
      console.log(`Book titled "${title}" has been added to the library.`);
    }
  
    // Method to search for a book by title
    searchBook(title) {
      const foundBook = this.books.find((book) => book.title.toLowerCase() === title.toLowerCase());
      if (foundBook) {
        console.log(`Book titled "${title}" found in the library.`);
        foundBook.displayDetails();
      } else {
        console.log(`Book titled "${title}" not found in the library.`);
      }
    }
  
    // Method to display all available books in the library
    displayBooks() {
      if (this.books.length === 0) {
        console.log("The library has no books.");
        return;
      }
  
      console.log("List of Available Books in the Library:");
      this.books.forEach((book, index) => {
        console.log(`\nBook ${index + 1}:`);
        book.displayDetails();
      });
    }
  }
  
  // Testing the Library Management System
  const myLibrary = new Library();
  
  // Adding books to the library
  myLibrary.addBook("The Great Gatsby", "F. Scott Fitzgerald", "Fiction");
  myLibrary.addBook("To Kill a Mockingbird", "Harper Lee", "Fiction");
  myLibrary.addBook("1984", "George Orwell", "Dystopian");
  
  // Searching for a specific book
  myLibrary.searchBook("1984");
  myLibrary.searchBook("Moby Dick"); // Book not in the library
  
  // Displaying all available books
  myLibrary.displayBooks();