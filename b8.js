"use strict";
function addObj(a, b) {
    return Object.assign(Object.assign({}, a), b);
}
console.log(addObj({ name: "Quang" }, { age: 19 }));
