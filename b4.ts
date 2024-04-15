function ss8a4(a:number|number[]):number|number[] {
    if(typeof a === 'number'){
        return a*a
    }else if(Array.isArray(a)){
        return a.map(item=>item*item)
    }
    return a;
}
console.log(ss8a4(4));
console.log(ss8a4([2,3,4]));