
// найти большой квадрат (БК)
// найти список квадратов-кнопок
// найти инпут
// найти кнопку добавления

// Повесить событие на кнопку добавления

// функция добавления
// достать value
// присвоить БК это value в background
// создать, окрасить, присвоить data-value, добавить классы кнопке
// вставить кнопку в список

// функция изменения цвета
// достать value из dataset
// перерисовать БК


let screen = document.getElementById('screen')
let btnList = document.getElementById('btnList')
let inputColor = document.getElementById('color')
let btnAdd = document.getElementById('add')

console.log(screen)
console.log(btnList)
console.log(inputColor)
console.log(btnAdd)

function addColor() {
  console.log(inputColor.value)
  screen.style.background = `#${inputColor.value}`
}

btnAdd.addEventListener('click', addColor)









