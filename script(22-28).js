// (22) 3.1 Обход вложенных массивов
// Задача: Напишите функцию, которая суммирует все числа во вложенном массиве. Тут дам подсказку, вам
// нужно будет использовать устойчивую конструкцию Array.isArray(item), где itemэто элемент массива.
// Так же вам нужно будет использоваться метод рекурсивной функции (когда функция может вызывать саму
// себя).
// constnestedArray = [1, [2, 3], [[4], [5, 6]], 7];
// Пример рекурсивной функции:
// function loop(x) {
// if (x >= 10) {
// // "x>= 10" — это условие для конца выполнения
// return;
// }
// // делать что-то
// loop(x + 1); // рекурсионный вызов
// }
// loop(0);

// const nestedArray = [1, [2, 3], [[4], [5, 6]], 7];
// function suma(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (Array.isArray(arr[i])) {

//             sum = sum + suma(arr[i])
//         } else {
//             sum = sum + arr[i]
//         }
//     }
//     return sum;
// }
// console.log(suma(nestedArray));

// (23) 3.2 Работа с объектами и массивами
// Задача: Создайте функцию, которая преобразует массив объектов в объект с ключами, соответствующими
// значениям свойств этих объектов.
// const users = [{ id: 1, name: 'Иван' }, { id: 2, name: 'Ольга' }];

// const users = [
//     { id: 1, name: 'Иван' },
//     { id: 2, name: 'Ольга' }
// ];
// const result = {};
// function arrayTooObj(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         result[arr[i].id] = arr[i].name
//     }
//     console.log(result);
// }
// arrayTooObj(users);

//(24) 3.3 Глубокая фильтрация
//Задача: Реализуйте функцию, которая фильтрует массив вложенных объектов по заданному условию
//(например, по возрасту пользователей). То есть у вас должна быть функция, которая на вход принимает
//два параметра: объект, в котором происходит поиск и возраст, по которому фильтруются данные.
//constdata = [{ user: { id: 1, name: 'Иван', age: 25 } }, { user: { id: 2, name: 'Ольга', age: 30 }
//}];

// const data = [
//     { user: { id: 1, name: 'Иван', age: 25 } },
//     { user: { id: 2, name: 'Ольга', age: 30 } }
// ];


// let needAge = [];
// function filterAge(mass, ageNeed) {
//     for (let i = 0; i < mass.length; i++) {
//         needAge = mass.filter(function (elem) {
//             return elem.user.age > ageNeed
//         })
//     }
// }
// filterAge(data, 26);
// console.log(needAge)

//(25) 3.4 Объединение массивов в объект
//Задача: Создайте функцию, которая объединяет два массива в объект, где первый массив содержит ключи,
//а второй - соответствующие значения.
//const keys = ['id', 'name'];
//constvalues = [1, 'Иван'];                  

// const keys = ['id', 'name'];
// const values = [1, 'Иван'];

// function object(keys, values) {
//     let obj = {};
//     for (let i = 0; i < keys.length; i++) {
//         obj[keys[i]] = values[i]
//     }
//     console.log(obj)
//     return obj
// }

// object(keys, values);

//  (26) 3.5 Преобразование объекта (здесь нужно будет прогнать объект, попробуйте сами найти как это
//  сделатьт.к.обычный forили whileздесь не подойдут)
//  Задача: Создайте функцию, которая преобразует объект, где ключи становятся значениями, а значения
//  ключами.
//  const input = { a: '1', b: '2' };

// const input = {
//     a: '1',
//     b: '2',
// };

// function objectic(input) {
//     const result = {}

//     Object.entries(input).forEach(([key, value]) => {
//         result[value] = key
//     })
//     console.log(result);
//     return result
// }

// objectic(input)

// (27) 3.6 Пересечение массивов
// Задача: Реализуйте функцию, которая находит пересечение (общие элементы) между двумя массивами.
// Общие элементы положите в другой массив и отобразите это в консоле.
// constarr1 = [1, 2, 3, 4];
// constarr2 = [3, 4, 5, 6];

// const array1 = [1, 2, 3, 4];
// const array2 = [3, 4, 5, 6];

// function arrDiff(arr1, arr2) {
//     let intersection = arr1;
//     for (let i = 0; i < arr2.length; i++) {
//         intersection = arr1.filter(num => arr2.includes(num));
//     }
//     console.log(intersection)
//     return intersection;
// }
// arrDiff(array1, array2)


//(28) 3.7 Разность массивов
//Задача: Создайте функцию, которая возвращает разность между двумя массивами (элементы, которые
//присутствуют в первом массиве, но отсутствуют во втором).
//const arr1 = [1, 2, 3, 4];
//constarr2 = [3, 4, 5, 6];

// const arr1 = [1, 2, 3, 4];
// const arr2 = [3, 4, 5, 6];


// function arrayDiff(arr1, arr2) {
//     let arr = arr1;
//     for (let i = 0; i < arr2.length; i++) {
//         arr = arr.filter(item => item !== arr2[i]);
//     }
//     console.log(arr)
//     return arr;
// }
// arrayDiff(arr1, arr2);
