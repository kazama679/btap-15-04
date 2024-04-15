"use strict";
function par(ss8a1) {
    if (ss8a1 === "null") {
        return null;
    }
    else if (ss8a1 === "undefined") {
        return undefined;
    }
    else if (ss8a1 === "true" || ss8a1 === "false") {
        return ss8a1 === "true";
    }
    else if (ss8a1 === "string") {
        return ss8a1;
    }
    else {
        return ss8a1;
    }
}
console.log(par("123"));
console.log(par("undefined"));
