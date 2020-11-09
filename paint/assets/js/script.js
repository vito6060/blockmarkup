// найти большой квадрат (БК)-------
// найти список квадратов-кнопок-------
// найти инпут-------
// найти кнопку добавления-------

// Повесить событие на кнопку добавления-------

// функция добавления
// достать value
// присвоить БК это value в background

// функция изменения цвета
// достать value из dataset
// перерисовать БК

// ==================================================================
let screen = document.getElementById('screen')
let btnList = document.getElementById('btnList')
// let btnList = document.querySelector('btnList') (для делегирования)
let inputColor = document.getElementById('color')
let btnAdd = document.getElementById('add')
let btnListItem = document.getElementById('btnListItem')
// let btnListItem = document.querySelectorAll('btnListItem') (для делегирования)

// Делегирование событий
// ul.addEventListener('click', function(event){
//   if(event.target && event.target.tagName == 'LI'){
//     console.log('Привет!')
// }
// });

console.log(screen)
console.log(btnList)
console.log(inputColor)
console.log(btnAdd)
console.log(btnListItem)

const MAX_LIST_BTNS = 8


function addColor() {
  const btns = document.querySelectorAll('.btn-color__item')
  const length = btns.length

  if (length >= MAX_LIST_BTNS) return

  console.log(inputColor.value)
  // создать кнопку - document.createElement
  // создать, окрасить, присвоить data-value, добавить классы кнопке
  // вставить кнопку в список
  btnListItem.style.background = `#${ inputColor.value }`
}
//
// btnAdd.addEventListener('click', addColor)

// function paintScreen() {
//   console.log(screen.value)
//   screen.style.background = btnListItem.style.background
// }

// btnListItem.addEventListener('click', paintScreen)
const myBtn = createButton('КНОПКА')
const myBtn2 = createButton('КНОПКА2')
const myBtn3 = createButton('КНОПКА3')

btnList.append(myBtn)
btnList.append(myBtn2)
btnList.append(myBtn3)

function createButton(text) {
  const myBtn = document.createElement('button')
  myBtn.classList.add('myBtn')
  myBtn.innerText = text

  return myBtn
}

btnAdd.addEventListener('click', addColor)