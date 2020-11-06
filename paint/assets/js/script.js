
// найти большой квадрат (БК)-------
// найти список квадратов-кнопок-------
// найти инпут-------
// найти кнопку добавления-------

// Повесить событие на кнопку добавления-------

// функция добавления
// достать value
// присвоить БК это value в background
// создать, окрасить, присвоить data-value, добавить классы кнопке
// вставить кнопку в список

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

function addColor() {
  console.log(inputColor.value)
  btnListItem.style.background = `#${inputColor.value}`
}

btnAdd.addEventListener('click', addColor)

function paintingScreen() {
  console.log(screen.value)
  screen.style.background = btnListItem.style.background
}

btnListItem.addEventListener('click', paintingScreen)

function commandColor() {

}








