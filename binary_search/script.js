let countBinarySearch = 0,  // Переменная для подсчета итераций
    arrayRandomNumbers = Array(10000000).fill(0).map( (value,indexValue) => indexValue + 3 ); // Формирование списка из 10000000 чисел
function binSearch(inputValue,arrayRandomNumbers)
{
  /*
    Функция реализации алгоритма бинарного поиска.
    Аргументы:
    inputValue        : тип данных (в зависимости от типа искомого элемента) значение элемента который необходимо найти
    arrayRandomNumber  : тип данных (список) массив элементов в котором будет производиться поиск
  */
	let left = 0;                         // Инициализация переменной левого края списка
	let right = arrayRandomNumbers.length-1   // Инициализация переменной правого края списка
	while (left <= right)                 // Повторять пока левый индекс не привысит правый
	{
    countBinarySearch++;                // Увеличение номера итерации на 1
		let mid = Math.floor(( right + left ) / 2);     // Расчет среднего значения
		if (arrayRandomNumbers[mid] > inputValue)       // Если средний элемент больше искомого
		{
			right = mid -1                                // Тогда правый индекс уменьшаем
		}
		else if (arrayRandomNumbers[mid] < inputValue)  // Иначе если больше искомого
		{
			left  = mid +1                                //  Тогда левый индекс увеличиваем
		}
		else                                            //  Если искомое значение равно среднему элементу
		{
			return mid                                    // Тогда возвращаем его индекс
		}
	}
	console.log("Elements not found")                 // В противном случае сообщаем что элемент не найден
}