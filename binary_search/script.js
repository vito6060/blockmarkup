let countBinarySearch = 0  // Переменная для подсчета итераций
let arrayRandomNumbers = new Array(10000000)
  .fill(0)
  .map((value, indexValue) => indexValue + 3)


const res = binSearch(10, arrayRandomNumbers)
console.log(res)

function binSearch(inputValue, arrayRandomNumbers) {
  /*
    Функция реализации алгоритма бинарного поиска.
    Аргументы:
    inputValue        : тип данных (в зависимости от типа искомого элемента) значение элемента который необходимо найти
    arrayRandomNumber  : тип данных (список) массив элементов в котором будет производиться поиск
  */

  // Инициализация переменной левого края списка
  let left = 0

  // Инициализация переменной правого края списка
  let right = arrayRandomNumbers.length - 1

  for (let mid; left <= right; countBinarySearch++) {
    // Расчет среднего значения

    mid = calcMiddle(left, right)
    // Если средний элемент больше искомого
    if (arrayRandomNumbers[mid] > inputValue) {
      // Тогда правый индекс уменьшаем
      right = mid - 1
      // Иначе если больше искомого
    } else if (arrayRandomNumbers[mid] < inputValue) {
      //  Тогда левый индекс увеличиваем
      left = mid + 1

      //  Если искомое значение равно среднему элементу
    } else {

      // Тогда возвращаем его индекс
      return mid
    }
  }

  console.log('Elements not found')                 // В противном случае сообщаем что элемент не найден
}

function calcMiddle(a, b) {
  return Math.floor((a + b) / 2)
}
