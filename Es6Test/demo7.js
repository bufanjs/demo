'use strict';

const myTest = {
    words: [],
    add(word) {
        this.words.push(word);
        console.log('add ' + word);
    },
    get called() {
        const words = this.words;
        if (!words.length) {
            return 'no word';
        } else {
            return words[words.length - 1];
        }
    }
};

myTest.add('tetsword');
console.log(myTest.called);
