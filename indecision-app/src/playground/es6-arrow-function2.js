// arguments object - no longer bound with arrow functions

const add = (a, b) => {
    //console.log(arguments);
    return a + b;
}

console.log(add(55, 1, 1001));

// this keyword - no longer bound with arrow functions

const user = {
    name: 'Ranbir',
    cities: ['Toronto', 'Victoria', 'Guelph'],
    printPlacesLived: function() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in ' + city);
        // });
    }
};

console.log(user.printPlacesLived());

// Challenge area

const multiplier = {
    // numbers - array of numbers
    // multiplyBy - single number
    // multiply - return a new array where the number have been multiplied
    numbers: [1, 2, 3],
    multiplyBy: 2,
    multiply: function() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};

console.log(multiplier.multiply());