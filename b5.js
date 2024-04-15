"use strict";
let ss8e5 = {
    name: "Quang",
    age: 20,
    address: "Hà Nội",
    email: "quang@gmail.com",
};
// union type
// Cho phép một biến có thể là một trong các kiểu được chỉ định.
// Sử dụng dấu gạch dưới ("|") để kết hợp các kiểu.
let ss8d5 = 1;
ss8d5 = "Quang";
let ss8f5 = [1, 2, 3, "hayyy"];
// sự khác nhau
// Khi sử dụng một biến có kiểu Union Type, chỉ có thể truy cập các thuộc tính hoặc phương thức chung cho tất cả các kiểu trong Union.
// Khi sử dụng một biến có kiểu Intersection Type, có thể truy cập các thuộc tính và phương thức từ tất cả các kiểu trong Intersection.
