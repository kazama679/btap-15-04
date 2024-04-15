function addObj(a:object, b:object):object{
    return {...a, ...b}
}
console.log(addObj({name: "Quang"},{age: 19}));