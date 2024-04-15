type Person ={
    name: string;
    age: number;
}
type Address ={
    street: string;
    city: string;
}
type All=Person&Address;
let user111:All={
    name: "Quang",
    age: 20,
    street: "ABC",
    city: "Hà Nội"
}