/* jshint esversion:6 */

(function() {
    'use strict';
}());


function testVar() {
    var a = 30;

    if (true) {
        var a = 50;
        console.log(a);
    }
    console.log(a);
}

function testLet() {
    let a = 30;

    if (true) {
        let a = 30;
        console.log(a);
    }
    console.log(a);
}