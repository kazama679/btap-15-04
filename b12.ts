function kiemTraSo(a: any): any {
  if (typeof a === "number" && !isNaN(a)) {
    if (Number.isInteger(a)) {
      console.log("số nguyên");
    } else {
      console.log("số thực");
    }
  } else {
    console.log("Không phải số.");
  }
}
kiemTraSo(5);
kiemTraSo(5.6);
kiemTraSo("abc");