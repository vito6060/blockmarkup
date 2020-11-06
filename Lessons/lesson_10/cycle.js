'use strict'

const fruits = ['apple', 'banana', 'orange']
//
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i])
// }
//
// fruits.forEach(function (fruit) {
//   console.log(fruit)
// })
//
// const doubleFruits = fruits.map(function (fruit) {
//   return `${fruit} x 2`
// })


const users = {
  vlad: 19,
  alex: 23,
}

Object.defineProperty(users, 'alex', {
  writable: false,
})

// const doubleAge = []
//
// for (let name in users) {
//   const age = users[name]
//
//   doubleAge.push({
//     name: name,
//     age: age * 2,
//   })
// }

// const names = Object.keys(users)
//
// const doubleAge = names.map(function (name) {
//   const age = users[name] * 2
//
//   return {
//     name, // name: name,
//     age, // age: age,
//   }
// })

// const usersEntries = Object.entries(users) // [ [key, value],  [key, value] ] ~ [ ["vlad", 19], ["alex", 23] ]
//
// const doubleAge = usersEntries.map(function (entry) {
//   const [ name, age ] = entry
//
//   return {
//     name,
//     age: age * 2,
//   }
// })

// const ages = Object.values(users)
//
// console.log(ages.reduce((acc, next) => acc + next))
