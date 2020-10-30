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
