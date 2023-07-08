//JS Part 1.1

//BT1
//Nhập vào 1 số bất kỳ, kiểm tra số đó có phải là số chẵn hay không? Kết quả trả về kiểu true/false
const checkEven = (number) => {
  return number % 2 == 0 ? true : false;
};
console.log(checkEven(12), `BT1`);

//BT2
//Viết hàm kiểm tra số đó có chia hết cho 3 hay không?
const checkOdd = (number) => {
  return number % 3 === 0 ? true : false;
};
console.log(checkOdd(9), `BT2`);

//BT3 Khai báo 2 số a = 4, b = 12, in kết quả bằng console.: Tính tổng 2 số a và b? Lấy b chia a, lấy phần dư? Lấy b chia a, lấy phần nguyên?
let a = 4;
let b = 12;
const sumAB = (num1, num2) => {
  return num1 + num2;
};
console.log(sumAB(a, b), "BT3 Tổng");

const balanceAB = (num1, num2) => {
  return num2 % num1;
};
console.log(balanceAB(a, b), "BT3 Phần dư");

const divideAB = (num1, num2) => {
  return num2 / num1;
};
console.log(divideAB(a, b), "BT3 Phần nguyên");

//BT4
//In ra họ và tên của mình bằng cách khai báo 1 biến chứa họ và biến chứa tên, có
// khoảng trắng giữa họ và tên của bạn.
let firstName = "Tín";
let lastName = "Trương";
const userName = () => {
  return `Hello ${firstName} ${lastName}`;
};
console.log(userName(), "BT4");

//BT5
//Viết hàm so sánh 2 số nguyên. nếu a > b thì trả về 1, nếu a < b thì trả về -1, nếu a == b thì
// trả về 0.
const checkAB = (a, b) => {
  if (a > b) {
    return 1;
  }
  return a < b ? -1 : 0;
};
console.log(checkAB(10, 2), "BT5");

//BT6
// Khai báo một chuỗi ký tự là “happy news year”
// a. In ra tổng số ký tự có trong chuỗi (gợi ý dùng length)
// b. In ra vị trí của chữ “y” từ đầu xuống (gợi ý dùng indexOf)
// c. In ra vị trí của chữ “y” từ dưới lên (gợi ý dùng lastIndexOf)
// d. Dùng replace để thay thế từ “happy” bằng một từ tuỳ ý bạn.
let hpny = "happy news year";
const hpnyAction = (string) => {
  console.log(string.length);
  console.log(string.indexOf("y"));
  console.log(string.lastIndexOf("y"));
  console.log(string.replace("happy", "Every"));
};
hpnyAction(hpny, "BT6");

//BT7
// Viết hàm nhập vào điểm của một học sinh và in ra kết quả tương ứng nếu:
// a. Điểm lớn hơn 8 thì in ra Excellence -
// b. Điểm lớn hơn 7 đến 8 thì in ra Good
// c. Điểm từ 4 đến bằng 7 thì in ra Not Good
// d. Nhỏ hơn 4 thì in ra Bad

const studentResult = (score) => {
  if (score > 8) {
    return "Excellence";
  }
};

console.log(studentResult(10), "BT7");
