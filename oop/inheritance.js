//Parent class
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    info() {
        console.log(`${this.name} is ${this.age} years old.`);
    }

    speak() {
        console.log("This animal makes a sound")
    }
}

//Child class Dog
class Dog extends Animal {
    constructor(name, age, breed){
        super(name, age); // call parent constructor
        this.breed = breed; // extra property
    }

    speak() {
        console.log(`${this.name} says Woof!`)
    }
}

// Child class Cat

class Cat extends Animal {
    constructor(name, age, color) {
        super(name, age); // call parent constructor
        this.color = color // extra property
    }

    speak() {
        console.log(`${this.name} say Meow!`)
    }
}

// Using the classes

let dog1 = new Dog("Max", 5, "German Shepherd");
let cat1 = new Cat("Luna", 3, "White");

dog1.info(); //Max is 5 years old.
dog1.speak(); //Max says Woof!
console.log(`Breed: ${dog1.breed}`); //Breed: German Shepherd

cat1.info(); // Luna is 3 years old.
cat1.speak(); // Luna says Meow!
console.log(`Color: ${cat1.color}`); // Color White 