'use strict';

function myTest() {
    function foo() {
        return 'foo';
    }

    function bar() {
        return 'bar';
    }

    //旧写法
    // const publicApi = {
    //     foo: foo,
    //     bar: bar
    // }

    const publicApi = { foo, bar }
    return publicApi;
}
