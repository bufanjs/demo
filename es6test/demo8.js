'use strict';

class Food {
    constructor(name) {
        this.name = name;
    }
    print() {
        console.log(this.name);
    }
}

const test = new Food('testClass');

test.print();
