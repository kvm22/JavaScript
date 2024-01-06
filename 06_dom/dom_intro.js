/*
The Document Object Model (DOM) in JavaScript represents the structure of an HTML document. It provides a structured representation of the document as a tree where each node represents part of the document, such as elements, attributes, and text.

JavaScript interacts with the DOM to:

Access elements: You can select HTML elements and modify their content, attributes, or style.

Modify content: You can change the content of HTML elements dynamically, like updating text, adding or removing elements, and so on.

React to events: You can listen for user actions (like clicks or keypresses) and respond accordingly.

Change styles and classes: You can dynamically apply CSS styles or classes to HTML elements.

Basic operations involving the DOM in JavaScript:

Accessing Elements
You can access elements in various ways:

getElementById(): Retrieves an element by its id.
getElementsByClassName(): Retrieves elements by their class name.
getElementsByTagName(): Retrieves elements by their tag name.
querySelector() and querySelectorAll(): Allow selection using CSS selectors.
Modifying Elements
Once you've accessed an element, you can modify it:

Change content: element.textContent or element.innerHTML.
Modify attributes: element.getAttribute(), element.setAttribute(), element.removeAttribute().
Manipulate styles: element.style.
Event Handling
You can handle events triggered by user actions:

Use addEventListener() to attach event listeners to elements.
Respond to events like clicks, keypresses, form submissions, etc.
Manipulating the DOM
You can create, append, insert, and remove elements:

document.createElement(): Create new elements.
parentNode.appendChild(): Append elements to a parent node.
parentNode.removeChild(): Remove elements from a parent node.
parentNode.insertBefore(): Insert elements before another element.
Here's a basic example:
*/


// Access an element by ID
const element = document.getElementById('myElementId');

// Change its content
element.textContent = 'Hello, DOM!';

// Add an event listener
element.addEventListener('click', () => {
  alert('You clicked the element!');
});
