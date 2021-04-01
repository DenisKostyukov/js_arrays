'use strict';

/* Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число. */

const array1 = [4, -2, 5, 19, -130, 0, 10];

let min = 0;
let max = 0;

for (let i = 0; i < array1.length; i++) {
  min = min < array1[i] ? min : array1[i];
  max = max > array1[i] ? max : array1[i];
}

console.log(`min: ${min}\nmax: ${max}`);

/* Дан массив arr. Найдите среднее арифметическое его элементов. Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79. */

const array2 = [12, 15, 20, 25, 59, 79];

let average;
let sum = 0;

for (let i = 0; i < array2.length; i++) {
  sum += array2[i];
}
average = sum / array2.length;
console.log(`Average: ${average}`);

/* Document tasks */

/* Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе. */

const arr = [1, 2, 3];
const task1Array2 = [4, 5, 6];

const concatArray = arr.concat(task1Array2);
console.log(`Concat array: ${concatArray}`);

/* Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1]. */

console.log(`Reverse array: ${arr.reverse()}`);
arr.reverse(); //это просто чтобы не создавать новый массив

/* Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6. */

arr.push(4, 5, 6)
console.log(`Push: ${arr}`);

/*  Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6. */

arr.unshift(4, 5, 6)
console.log(`Unshift: ${arr}`);

/* Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент и удалите его. */

const languageArray = ['js', 'css', 'jq'];

let firstElement = languageArray.shift();
console.log(`First element: ${firstElement}`);

/*  Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент. */

let lastElement = languageArray.pop();

console.log(`Last element: ${lastElement}`);

/* Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3]. */

const array = [1, 2, 3, 4, 5];

const newArrayTask7 = array.slice(0, 3);
console.log(`First 3 elements: ${newArrayTask7}`);

/* Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5]. */

const newArray2Task7 = array.slice(3);
console.log(`Last 2 elements: ${newArray2Task7}`);

/* Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5]. */
array.splice(1, 2);
console.log(`Task 9: ${array}`)

/* Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4]. */
const arrayTask10 = [1, 2, 3, 4, 5];
const newArrayTask10 = arrayTask10.splice(1, 3);
console.log(`Task 10: ${newArrayTask10}`);

/* Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5]. */

const arrayTask11 = [1, 2, 3, 4, 5];

arrayTask11.splice(3, 0, 'a', 'b', 'c');
console.log(`Task 11: ${arrayTask11}`);

/* Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e']. */

const arrayTask12 = [1, 2, 3, 4, 5];

arrayTask12.splice(1, 0, 'a', 'b');
arrayTask12.splice(6, 0, 'c');
arrayTask12.splice(8, 0, 'e');
console.log(`Task 12: ${arrayTask12}`);

/* Дан массив [3, 4, 1, 2, 7]. Отсортируйте его. */

const arrayTask13 = [3, 4, 1, 2, 7];
arrayTask13.sort();
console.log(`Task 13: ${arrayTask13}`);

/* Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей. */

const obj = {
  js: 'test',
  jq: 'hello',
  css: 'world'
};

console.log(`Task 14: ${Object.keys(obj)}`);


/* необходимо создать функцию hasElem, которая параметрами будет принимать массив и строку, и возвращать true, если строка есть в массиве, и false - если нет */

function hasElem(arr, str) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === str) return true;
  }
  return false;
};
const testArray = ['home', 'my', 'test', 'str', 'something']
console.log(`Has element: ${hasElem(testArray, 'test')}`);

/* Дан массив с числами. Проверьте, что в этом массиве есть указанное число. Если есть - вернуть true, а если нет - вернуть false. */

const numbers = [1, 2, 3, 4, 5, 5, 7, 8, 9];
let number = +prompt("Enter number");
let result = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === number) result = true;
};
console.log(`Has number: ${result}`);

/* Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа подряд. Если есть -  вернуть true, а если нет - вернуть false. */
let res = false;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === numbers[i + 1]) res = true;
};
console.log(`Identical: ${res}`)