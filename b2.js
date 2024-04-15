"use strict";
let obj2 = {
    name: "Quang",
    age: 20,
    address: {
        city: "Ha Noi",
    }
};
if (typeof obj2.name === "string" && typeof obj2.age === "number" && typeof obj2.address === "object") {
    console.log(true);
}
else {
    console.log(false);
}
