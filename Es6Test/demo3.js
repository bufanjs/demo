'use strict';

//功能简洁明了
for (let i = 0; i < 6; i++) {
    setTimeout(function() {
        console.log('test --' + i);
    }, 1000 * i);
}

//功能混乱需要其他的处理方式
for (var i = 0; i < 6; i++) {
    setTimeout(function() {
        console.log('test ----' + i);
    }, 1000 * i);
}
