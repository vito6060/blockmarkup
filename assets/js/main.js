const btnTop = document.querySelector('.bolt__btn-plus_top')
const tooltipTop = document.querySelector('.bolt__tooltip_top')

let isShowTop = false
btnTop.addEventListener('click', function (event) {

  if (!isShowTop) {
    tooltipTop.style.display = 'block'
  } else {
    tooltipTop.style.display = 'none'
  }

  isShowTop = !isShowTop
})

function toggleShowTooltip(tooltip, isShow) {

}


const originBolt = document.querySelector('.bolt-inner__img')


// const colorBtnRed = document.querySelector('.btn-color_red')
// colorBtnRed.addEventListener('click', changeColor)
//
// const colorBtnYellow = document.querySelector('.btn-color_yellow')
// colorBtnYellow.addEventListener('click', changeColor)

const colorBtnsPseudo = document.querySelectorAll('.fastener-colors__btn')
const colorBtns = Array.from(colorBtnsPseudo)

// Способ 1
// for (let i = 0; i < colorBtns.length; i++) {
//   colorBtns[i].addEventListener('click', changeColor)
// }

console.log(colorBtns)
console.log([1, 2])

// Способ 2.1
colorBtns.forEach(function (btn) {
  btn.addEventListener('click', changeColor)
})


// const numbers = [5, 32, 7, 234]
//
// numbers.forEach(function (item, index) {
//   console.log(item)
// })

// Способ 2.2 эквивалентен
// const forEach = function (array, cb) {
//   for (let i = 0; i < array.length; i++) {
//     cb(array[i], i)
//   }
// }
//
// forEach([1, 5, 6, 2], function (item, index) {
//   console.log(item, index)
// })

// Способ 3 - делегирование событий


function changeColor(event) {
  originBolt.src = event.target.dataset.src
}
//========================================

let fastenerColors = document.querySelector('fastener-colors');

fastenerColors.addEventListener('click', function(event) {
  if (event.target.isShowTop) {
    tooltipTop.style.display = 'block'
  }
  else {
    tooltipTop.style.display = 'none'
  }
})






















