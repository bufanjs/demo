'use strict';

var foo = 'foo';

(function baz() {
    if (foo) {
        var bar = 'bar';
        let foobar = foo + bar;
        console.log(foobar);
    }
    console.log('test ' + foo + bar);
    try {
        console.log('test ' + foobar);
    } catch (err) {
        console.log(err);
    }


    //测试let声明前调用
    //let和const不会变量提升
    try {
        console.log(lettest);
    } catch (err) {
        console.log(err);
    }
    let lettest = 'test let';
    console.log(lettest);

    //不能改变const的值 如果改变其值就会报TypeError
    const testconst = 1;
    try {
        testconst = 123;
    } catch (err) {
        console.log(err);
    }
})();
