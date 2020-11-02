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

const btnMiddle = document.querySelector('.bolt__btn-plus_right-end')
const tooltipMiddle = document.querySelector('.bolt__tooltip_middle')

let isShowMiddle = false
btnMiddle.addEventListener('click', function (event) {

  if (!isShowMiddle) {
    tooltipMiddle.style.display = 'block'
  } else {
    tooltipMiddle.style.display = 'none'
  }

  isShowMiddle = !isShowMiddle
})

const btnBottom = document.querySelector('.bolt__btn-plus_bottom')
const tooltipBottom = document.querySelector('.bolt__tooltip_bottom')

let isShowBottom = false
btnBottom.addEventListener('click', function (event) {

  if (!isShowBottom) {
    tooltipBottom.style.display = 'block'
  } else {
    tooltipBottom.style.display = 'none'
  }

  isShowBottom = !isShowBottom
})


const originBolt = document.querySelector('.bolt-inner__img')


// const colorBtnRed = document.querySelector('.btn-color_red')
// colorBtnRed.addEventListener('click', changeColor)
//
// const colorBtnYellow = document.querySelector('.btn-color_yellow')
// colorBtnYellow.addEventListener('click', changeColor)

const colorBtnsPseudo = document.querySelectorAll('.fastener-colors__btn')
console.log(colorBtnsPseudo)
const colorBtns = Array.from(colorBtnsPseudo)

// Способ 1
// for (let i = 0; i < colorBtns.length; i++) {
//   colorBtns[i].addEventListener('click', changeColor)
// }

// Способ 2.1
// colorBtns.forEach(function (btn) {
//   btn.addEventListener('click', changeColor)
// })


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


function changeColor(element) {
  originBolt.src = element.dataset.src
}
//========================================

let fastenerColors = document.querySelector('.fastener-colors');

fastenerColors.addEventListener('click', function(event) {
  const btn = event.target.closest('.fastener-colors__btn')

  if (!btn) return

  if (btn.classList.contains('fastener-colors__btn')) {
    changeColor(btn)
  }
})



const myBtn = document.querySelector('.myBtn')

console.log('this',  this)

myBtn.addEventListener('click', () => {
  console.log(this)
  // this.classList.add('active', 'disable', 'animate')
})



let user = {
  name: "Джон",
  hi() { console.log('hi from user', this); },
  bye() { alert("Пока"); }
};

// user.hi(); // Джон (простой вызов метода работает хорошо)

const hi = user.hi.bind(user)

hi()


// call/apply - когда сразу вызывать
// bind - когда хочу не сразу вызывать, но чтобы работало нормально (был передан контекст)
