console.log(Array.isArray('Hello'))//false
console.log(Array.isArray([]))//true
console.log(Array.isArray([1]))//true
console.log(Array.isArray({}))//false
console.log(Array.isArray(null))//false
console.log(Array.isArray(undefined))//false
console.log(Array.isArray(true))//false
console.log(Array.isArray(false))//false

console.log(Array.isArray(Array(2))) // true

// todo alex проверить его на arguments
