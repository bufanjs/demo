'use strict';

const myTest = {
    name: 'test',
    testArr: ['1', '2', '3'],
    run: function() {
        const self = this;
        this.testArr.forEach(function() {
            console.log(self.name);
        });
    }
}

myTest.run();


const myTest2 = {
    name: 'testtest',
    testArr: [1, 2, 3],
    run: function() {
        this.testArr.forEach(() => {
            console.log(this.name);
        });
    }
}

myTest2.run();