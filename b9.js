"use strict";
function checkAdd(a) {
    if (typeof a === "string") {
        return a.length;
    }
    else if (a instanceof Array) {
        let newArr = a.reduce((b, c) => {
            return b + c;
        });
        return newArr;
    }
    else if (typeof a === "number") {
        return a * a;
    }
}
console.log(checkAdd("kjhgfd"));
console.log(checkAdd([1, 2, 3, 7]));
console.log(checkAdd(5));
