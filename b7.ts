function check(a: number|string|object): string{
    if(typeof a === "number"){
        return "number"
    } else if(Array.isArray(a)){
        return "Array"
    } else if(typeof a === "object"){
        return "object"
    } else{
        return "ko xác định"
    }
}
console.log(check(101)); 
console.log(check([1, 2, 3])); // array
console.log(check({name: "Quang"})); // obj