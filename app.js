// 1-Masala
const toUpper = (str) => str.toUpperCase();
const removeSpaces = (str) => str.replaceAll(" ", "");
const getLength = (str) => str.length;

const pipe = (functions) => (value) =>
  functions.reduce((res, func) => func(res), value);

const result = pipe([toUpper, removeSpaces, getLength])("hello world");

console.log(result);

// 2-Masala
const multiply = (arr) => arr.map((num) => num ** 2);
const sum = (arr) => arr.reduce((acc, num) => acc + num, 0);
const sqrt = (num) => Math.sqrt(num);

const pipe2 = (functions) => (value) =>
  functions.reduce((res1, funk1) => funk1(res1), value);

const result1 = pipe([multiply, sum, sqrt])([2, 4, 6, 8]);

console.log(result1);

// 3-Masala
const multiply3 = (obj) => ({ ...obj, age: obj.age + 5 });
const salary = (obj) => ({ ...obj, salary: obj.salary * 1.1 });
const aboute = (obj) => JSON.stringify(obj);
const pipe3 = (functions) => (value) =>
  functions.reduce((res3, func) => func(res3), value);
const result3 = pipe3([multiply3, salary, aboute])({
  name: "John",
  age: 25,
  salary: 5000,
});
console.log(result3);

// 4-Masala
const numbersfind = (str) => str.replace(/\D/g, "");
const sumNumber = (numstr) =>
  numstr.split("").reduce((sum, num) => sum + Number(num), 0);
const pipe4 = (functions) => (value) =>
  functions.reduce((res4, func1) => func1(res4), value);

const result4 = pipe4([numbersfind, sumNumber])("a1b2c3d4e5");
console.log(result4);

// 5-Masala
let arr = [1, 2, 2, 3, 4, 4, 5];

const number1 = (arr) => arr.filter((num, index) => arr.indexOf(num) === index);
const toqNumber = (arr) => arr.filter((arr) => arr % 2 !== 0);
const maxNumber = (arr) => Math.max(...arr);
const pipe5 =
  (...fns) =>
  (input) =>
    fns.reduce((acc, fn) => fn(acc), input);
const result5 = pipe5(number1, toqNumber, maxNumber)(arr);

console.log(result5);

// // 6-Masala
const multiply1 = (arr) => arr.map((num) => num * 2);
const sum2 = (arr) => arr.reduce((acc, num) => acc + num, 0);
const squarelastnum = (num) => num ** 2;
const pipe6 = (functions) => (value) =>
  functions.reduce((res6, func) => func(res6), value);

const result6 = pipe6([multiply1, sum2, squarelastnum])([1, 2, 3, 4, 5]);

console.log(result6);

// curry function

// bu yerda funksiya a qiymatni qabul qiladi yani "1"
const multiplY = (a) => {
  // va bu funksiya b qiymatni qabul qiladi yani "2"
  return (b) => {
    // bu yerda b argumentiga qiymat berilmasa yani () bosh qavs berilsa a qiymatni qaytaradi
    if (!b) {
      return a;
    }
    // berigan qiymatlarni bir biriga ko'paytiramiz
    return multiplY(a * b);
  };
};
// yani hohlaganchga qiymat berish mumkin faqat oxiriga () berish kerak
const m = multiplY(1)(2)(3)(4)();
console.log(m);
