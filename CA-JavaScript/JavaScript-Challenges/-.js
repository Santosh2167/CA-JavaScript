//Rewrite code below using ES6 Classes

"use strict";

function Food(calories) {
    this.calories = calories;
}

function Fruit(title, price, calories) {
    Food.call(this, calories);
    this.title = title;
    this.price = price;
};

Fruit.prototype = Object.create(Food.prototype);

Fruit.prototype.priceInfo = function() {
    return `Price of one ${this.title} is $${this.price}`;
};

var apple = new Fruit("Apple", 2, 150);
console.log(apple.priceInfo());

var orange = new Fruit("Orange", 3, 180);
console.log(orange.priceInfo());


//Rewrite this code without using ES6 Classes
class Mammal {
    constructor(name) {
        this.hair = true;
        this.warmblooded = true;
    }

    breath() {
        console.log("I love H2O");
    }

    speak(input) {
        return `I am a ${input}`;
    }
}

class Lion extends Mammal {
    constructor(name) {
        super();
        this.type = "Lion";
        this.name = name;
    }

    roar() {
        return super.speak(this.type) + "! Here me ROAR!";
    }
}

let simba = new Lion("simba");
console.log(simba.roar());