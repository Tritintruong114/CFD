// 1. Tạo 1 mảng gồm tên các khoá học của CFD Circle. In ra số lượng các khoá học? In ra chỉ số
// index của mảng? In ra tên khoá học ở vị trí index thứ 2. In ra chuỗi tên các khoá học cách
// nhau bằng dấu phẩy? Tính tổng giá các khoá học? (bắt buộc dùng 1 trong những Phương
// thức xử lý mảng nâng cao đã học)

const courses = [
  { name: "FE newbie", price: 5000000 },
  { name: "FE Responsive", price: 4000000 },
  { name: "ReactJS Master", price: 6000000 },
  { name: "ReactJS Advantage", price: 6000000 },
  { name: "Typescript and ReactJS", price: 7000000 },
];

// In số lượng khóa học.
const totalCourse = courses.length;
console.log(totalCourse);

//In ra chuỗi tên các khoá học cách
// nhau bằng dấu phẩy?
const courseName = courses.map((course) => {
  return course.name;
});
console.log(courseName);
// In ra tên khoá học ở vị trí index thứ 2.
console.log(courses[2].name);

//Tính tổng giá các khoá học? (bắt buộc dùng 1 trong những Phương
// thức xử lý mảng nâng cao đã học)
const sumPrice = (courses, key) => {
  const total = courses.reduce((accumulator, course) => {
    return accumulator + course[key];
  }, 0);

  return `Total ${key} : ${total.toLocaleString("en-Us")}`;
};

//Input  with array and key
const result1 = sumPrice(courses, "price");
console.log(result1);

//2.Viết 1 hàm nhận vào 1 mảng số và trả về tổng giá trị các phần tử của mảng?

const length = (array) => {
  return `Total: ${array.length} objects`;
};
console.log(length(courses));

//3. Viết 1 hàm nhận vào 2 tham số là array và character. Hàm trả về 1 chuỗi là kết quả của việc
// nối các phần tử của array với character? (lưu ý: array là mảng nhận vào, character là ký tự để
// nối các phần tử của mảng).

let newCourse = { name: "Typescript Indepth", price: 5000000 };

const addItem = (name, price) => {
  let Fixprice = price.toLocaleString("en-Us");

  let newCourse = { name, Fixprice };
  const newArray = [...courses, newCourse];
  console.log(newArray);
};

addItem("UI & UX", 6000000);

// 4.Tạo 1 mảng chứa các object có thuộc tính là tên các nhân viên và giá trị là tiền lương. Viết hàm
// trả về tổng tất cả lương của các nhân viên trong object?
const staff = [
  { name: "Kiet", salary: 20000000 },
  { name: "Huong", salary: 15000000 },
  { name: "Hai", salary: 14000000 },
];
const result2 = sumPrice(staff, "salary");
console.log(result2);

//5.Cho mảng gồm các phần tử 2,4,5,7,32,67,30,100. Tìm và in ra phần tử đầu tiên thoả điều kiện phần
// tử đó > 20?

const numbers = [2, 4, 5, 6, 32, 67, 30, 100];

const isItBiggerThan = (number) => {
  let num = numbers.find((num) => num > number);
  console.log(num);
};

isItBiggerThan(5);
isItBiggerThan(30);
isItBiggerThan(63);

//6.Cho mảng diemso gồm các phần tử 5, 7, 8, 9, 3. Sử dụng hàm every để kiểm tra điểm số của học
// sinh được lưu dưới dạng mảng có đủ để đỗ kỳ thì không. Điều kiện tất cả điểm số >= 5. Nếu đủ
// điều kiện thì in ra “Đủ điểm đỗ” ngược lại thì “Không đủ điểm đỗ”?

const scores = [5, 7, 8, 9, 3];

const checkIsPass = (array) => {
  if (array.every >= 5) {
    console.log(`Passed`);
  }
  console.log(`Not pass because have score below 5`);
};

checkIsPass(scores);
