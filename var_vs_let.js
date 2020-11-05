// var array = []



// for(var i = 0; i < 11; i = i + 2) {
//    замыкание
//   (function (i){
//     array.push(function () {
//       console.log(i)
//     })
//   }(i))
// }

// console.log(i) // i = 10

// console.log(array)

// var func = array[0]
//
// func()


// var a = 0
// var b = 3
//
//
// function sum() {
//   return a + b
// }

// const a = 0
// const b = 0
//
// if (a === 0) {
//   const a = 5
//   console.log(a, b) // 5 0
// }
//
// console.log(a, b) // 0 0


// console.log()
//
// let alex = 'alex'
// let vlad = 'vlad'
//
// function hello() {
//   function join(alex) {
//     return `${alex} and ${vlad}`
//   }
//
//   var joined = join(alex)
//
//   return `Hello, ${joined}`
// }
//
// console.log(hello())

// var name = 'alex'
//
// function hello(name) {
//   return function (n) {
//     return `Hello, ${name} x${n}`
//   }
// }
//
// var helloToAlex = hello('alex')
// var helloToVlad = hello('vlad')
//
//
// var str1 = helloToAlex(5)
// var str2 = helloToVlad(10)
//
// console.log(str1)
// console.log(str2)


// function sum() {
//   const args = Array.from(arguments)
//   console.log(args.join(', '))
//
//   let number = 0
//   for (let i = 0; i < args.length; i++ ) {
//     number += args[i] // number = number + args[i]
//   }
//
//   return number
// }

// function sum() {
//   const args = Array.from(arguments)
//   return args.reduce((a, b) => a + b)
// }

// function sum(...args) {
//   return args.reduce((a, b) => a + b, 0)
// }

// const result = sum(1, 2, 3, 4, 5, 6, 7, -28, 10)
//
// console.log(result)


var array = [1, 2, 3, 4, 5]


// формула reduce
// acc + next
// 1 + 2 = 3        // i = 1
// 3 + 3 = 6        // i = 2
// 6 + 4 = 10       // i = 3
// 10 + 5 = 15      // i = 4

// реализация сложения через reduce
array.reduce(function (acc, next) {
  return acc + next
})

// свой собственный reduce БЕЗ initialValue
const reduce = function (array) {
  let acc = array[0]
  for (let i = 1; i < array.length; i++ ) {
    acc += array[i] // number = number + args[i]
  }

  return acc
}

// console.log(reduce([1, 2, 3]))


const res = [20, 30, 40].reduceRight(function (acc, next) {
  console.log(acc, next)
  return acc * next
}, 2)

console.log(res)

