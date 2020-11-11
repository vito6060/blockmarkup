// Через from

// const arr = Array.from({0: 'Банан', 1: 'Яблоко', 2: 'Апельсин', length: 3});
// console.log(arr)

//====================================

// Через цикл

// let obj = {
//   0: 'apple',
//   1: 'orange',
//   2: 'pumpkin',
//   3: 'tomato',
//   length: 4,
// }
//
// let arr = []
//
// for (let i = 0; i < obj.length; i++) {
//   arr.push(obj[i])
// }
//
// console.log(arr)

//====================================

// Через spread оператор

let obj = document.querySelectorAll("li")

let arr = [...obj];

console.log(arr);


// todo Хочу задания на циклы (понравилось)
