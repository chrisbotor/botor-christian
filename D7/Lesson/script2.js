// Accessing parent, child, and sibling elements using DOM traversal methods
// Access the parent element of a specif
const container = document.getElementById('container')
console.log(container.parentNode)

// Access the child elements of a specific elent
const paragraph = container.children
console.log(paragraph)

// Access the 1st child element
const firstParagraph = container.firstElementChild
console.log(firstParagraph)

// Access the next sibling element 
const secondParagraph = firstParagraph.nextElementSibling
console.log(secondParagraph)

// Navigating the DOM tree using properties like parentNode, children, and nextSibling
console.log(secondParagraph.parentNode)

// Access the child elements of a specific element using children property
const contentDiv = document.querySelector('.content')
const nestedParagraph = contentDiv.children[0]
console.log(nestedParagraph)

// Access the previous sibling element using previousSibling property
console.log(nestedParagraph.previousSibling); // Output: #text (line break)

// Access the next sibling element using nextSibling property
console.log(nestedParagraph.nextSibling); // Output: null
