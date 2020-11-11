const arr = [1, 2, 'apple', 50];

console.log(arr.includes(1)) // 1 - 0
console.log(arr.includes('apple')) // 'apple' - 2
console.log(arr.includes(5)) // 5 - (-1)
console.log(arr.includes(56)) // 56 - (-1)

console.log(arr.includes(1, 2)) // 1 - (-1)
console.log(arr.includes('apple', 2)) // 'apple' - 2
console.log(arr.includes(5, 2)) // 5 - (-1)
console.log(arr.includes(56, 2)) // 56 - (-1)
