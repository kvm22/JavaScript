// In object-oriented programming (OOP), there are four fundamental principles often referred to as the "four pillars of OOP." These principles help in designing and organizing code in a way that promotes modularity, reusability, and maintainability. Here are the four pillars of OOP in the context of JavaScript:

// Encapsulation:

// Definition: Encapsulation refers to the bundling of data (properties) and methods (functions) that operate on the data into a single unit, known as a class.
// In JavaScript: You can achieve encapsulation using classes and closures. Class properties are encapsulated within the class, and methods can access and manipulate those properties.
// javascript

class Person {
  constructor(name, age) {
    this._name = name; // Encapsulated property
    this._age = age;   // Encapsulated property
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }

  // Other methods...
}

// Abstraction:

// Definition: Abstraction involves simplifying complex systems by modeling classes based on the essential properties and behaviors they share, while hiding the unnecessary details.
// In JavaScript: Classes and interfaces can be used to define abstractions. Private methods and properties can be used to hide implementation details.
// javascript

class Shape {
  constructor() {
    if (new.target === Shape) {
      throw new Error('Shape class cannot be instantiated directly.');
    }
  }

  draw() {
    // Abstract method to be implemented by subclasses
    throw new Error('Method not implemented.');
  }
}
// Inheritance:

// Definition: Inheritance allows a class (subclass/derived class) to inherit properties and behaviors from another class (superclass/base class), promoting code reuse.
// In JavaScript: Inheritance is achieved using the extends keyword in class definitions.
// javascript

class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log(`${this.name} is eating.`);
  }
}

class Dog extends Animal {
  bark() {
    console.log('Woof, woof!');
  }
}

const myDog = new Dog('Buddy');
myDog.eat();  // Output: Buddy is eating.
myDog.bark(); // Output: Woof, woof!


// Polymorphism:

// Definition: Polymorphism allows objects of different types to be treated as objects of a common type, simplifying code and promoting flexibility.
// In JavaScript: Polymorphism is inherent in the language, and it can be achieved through method overriding and interfaces.
// javascript


class Bird {
  fly() {
    console.log('The bird is flying.');
  }
}

class Fish {
  swim() {
    console.log('The fish is swimming.');
  }
}

function move(animal) {
  animal.fly && animal.fly();   // Polymorphic behavior
  animal.swim && animal.swim(); // Polymorphic behavior
}

const bird = new Bird();
const fish = new Fish();

move(bird); // Output: The bird is flying.
move(fish); // Output: The fish is swimming.
// These four pillars collectively provide a solid foundation for designing object-oriented systems in JavaScript.

