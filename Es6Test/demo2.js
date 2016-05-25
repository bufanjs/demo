'use strict';

var test = [1, 2, 3, 4, 5];

//var会污染全局变量
for (var i = 0; i < test.length; i++) {
    console.log('test - ' + i);
}

console.log(i);

for (let j = 0; j < test.length; j++) {
    console.log('test -- ' + j);
}

try {
    console.log(j);
} catch (err) {
    console.log(err);
}
