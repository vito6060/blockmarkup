
// Через from

// const arr = Array.from({0: 'Банан', 1: 'Яблоко', 2: 'Апельсин', length: 3});
// console.log(arr)

//====================================

// Через цикл

// let obj = {0:'apple' ,1:'orange' , 2:'pumpkin', 3:'tomato', length: 3};
// let arr = [];
//
// for (let i = 0; i + 1 < obj.length; i++) {
//     arr.push(obj[i]);
// }
//
// console.log(arr)

//====================================

// Через spread оператор

let obj = document.querySelectorAll("list")
let arr = [...obj];

console.log(arr);
