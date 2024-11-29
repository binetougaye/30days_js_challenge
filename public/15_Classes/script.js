// Create an Animal class. The class will have name, age, color, legs properties and create different methods
class Animal {
    constructor(name, age, color, legs) {
        this.name = name;
        this.age = age;
        this.color = color;
        this.legs = legs;
    }

    description() {
        return `${this.name} is a ${this.color} animal, ${this.age} years old, with ${this.legs} legs.`;
    }

    mamifere() {
        return "Le mouton est un mamifere";
    }


}





// Create a Dog and Cat child class from the Animal Class.
class Dog extends Animal {
    constructor(name, age, color, legs, breed) {
        super(name, age, color, legs);
        this.breed = breed;
    }


    dogSong() {
        return "waf";
    }
}


class Cat extends Animal {
    constructor(name, age, color, legs, isIndoor) {
        super(name, age, color, legs);
        this.isIndoor = isIndoor;
    }

    catSong() {
        return "Meow";
    }


}

