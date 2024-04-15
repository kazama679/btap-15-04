// em lấy vd trên lớp của thầy Hai luôn
// đây là intersection
// Cho phép tạo ra một kiểu mới bằng cách kết hợp các thành phần từ nhiều kiểu khác nhau.
// Sử dụng dấu nối ("&") để kết hợp các kiểu.
type ss8a5={
    name:string,
    address:string,
    age:number
}
type ss8b5={
    email:string,
    name:string
}
type ss8c5=ss8a5&ss8b5;
let ss8e5:ss8c5={
    name: "Quang",
    age: 20,
    address: "Hà Nội",
    email: "quang@gmail.com",
}

// union type
// Cho phép một biến có thể là một trong các kiểu được chỉ định.
// Sử dụng dấu gạch dưới ("|") để kết hợp các kiểu.
let ss8d5:number | string=1;
ss8d5 = "Quang";
let ss8f5: (number | string)[]=[1,2,3, "hayyy"];

// sự khác nhau
// Khi sử dụng một biến có kiểu Union Type, chỉ có thể truy cập các thuộc tính hoặc phương thức chung cho tất cả các kiểu trong Union.
// Khi sử dụng một biến có kiểu Intersection Type, có thể truy cập các thuộc tính và phương thức từ tất cả các kiểu trong Intersection.