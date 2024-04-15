type Person10={
    name:string,
    age:number,
}
type Employee10= Person10&{
    employeeId:number
}
let user10:Employee10 = {
    name: "ABC",
    age: 20,
    employeeId: 56789
}