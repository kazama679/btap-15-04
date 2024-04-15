function receive(a:string | string[]): void {
    if (typeof a === 'string'){
        console.log(a);
    } else if (typeof a ===  'object'){
        a.forEach(i => {
            console.log(i);
        });
    }
}
receive(["a", "b", "c"]);
receive("a");