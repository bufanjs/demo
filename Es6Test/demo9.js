'use strict';

let type = 'b';
((type) => {
    return {
        'a': () => {
            console.log('print a');
        },
        'b': () => {
            console.log('print b');
        }
    }[type]()
})(type)
