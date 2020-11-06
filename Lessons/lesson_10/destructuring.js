const user = {
  name: 'alex',
  age: 23,
}

function hello(user) {
  // const name = user.name
  // const age = user.age

  const { name, age } = user
  console.log(`Hello, ${name}. You are ${age} old.`)
}

hello(user)
//            [ name, age ]
const array = ['alex', 23]

const [ name, age ] = array

console.log(name, age)


const fraze = 'Hello,world,from,Alex'

const splittedFraze = fraze.split(',')

console.log(splittedFraze)
