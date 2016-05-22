'use strict';

let arr = [0, 1, 2, 3, 4, 5];
let result = arr.indexOf(5);
console.log(result);

let testArr = [0, 1, 2, 2, 1, 2, 3, 4, 1, 2];
let countArr = [];
let i = testArr.indexOf(2);

while(i>-1){
	countArr.push(i);
	i = testArr.indexOf(2,i+1);
}

console.log(countArr);
