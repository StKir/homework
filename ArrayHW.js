// Используя метод map() напишите код, который получает из массива строк новый массив,
// содержащий их длины.
var vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
let vegetableLength = vegetables.map((e) => e.length)
console.log(vegetableLength); // 7,4,7,8;

// Имеется массив простых чисел: numbers = [2, 3, 5, 7, 11, 13, 17, 19]. Использую метод reduce()
// напишите функцию currentSums(numbers), которая возвращает новый массив из такого же числа элементов, 
// в котором на каждой позиции будет находиться сумма элементов массива numbers до этой позиции
// включительно.

// let numbers = [2, 3, 5, 7, 11, 13, 17];
// let newMassiv = [];
// function currentSums(numbers){
//     for(let i = 0; i< numbers.length; i++){
//         let as = numbers.reduce((a,b)=> {
//         return numbers[i] + numbers[i-1]}, 0)
//         newMassiv.push(as)
//     }
//     console.log(newMassiv);
// }

// currentSums(numbers);

// Напишите код, который получает из массива чисел новый массив, содержащий пары 
// чисел, которые в сумме должны быть равны семи: (0:7), (1:6) и т.д.

var arr5 = [0, 1, 2, 3, 4, 5, 6, 7];
function sumSeven(numbers) {
    let asd = [];
    for (let i = 0; i < numbers.length; i++){
        if(numbers[i] <= 7){
            asd[i] = `${numbers[i]} : ${7 - numbers[i]}`;
        }
    }
    console.log(asd);
 // ваш код

}
sumSeven(arr5);

// Перед вами переменная, содержащая строку. Напишите код, создащий массив, который
// будет состоять из первых букв слов строки str. 
var str = "Каждый охотник желает знать, где сидит фазан."; 
function foo(str){
    let masss = [];
    masss.push(str[0]);
    for(let i = 0; i < str.length; i++){
        if(str[i] == " "){
            masss.push(str[i+1]);
        }
    }
    console.log(masss);
}
foo(str);  // [К,о,ж,з,г,с,ф]

// Перед вами переменная, содержащая строку. Напишите код, создащий массив, который
// будет состоять из строк, состоящих из предыдущего, текущего и следующего символа строки str. 
var str = "JavaScript"; 
function foo1(str){
    let ars = str.split('');
    let Nmas = ars.map((e,i,arr)=> arr[i-1] + e + arr[i+1])
    console.log(Nmas);
}
//     for(let i=0; i<ars.length; i++){
//         Nmas[i]= ars[i-1]+ars[i]+ars[i+1];
//     }
//     console.log(Nmas);
// }
// Ваш код 
foo1(str);
// foo(arr); // [Ja,Jav,ava,vaS,aSc,Scr,cri,rip,ipt,pt] 

// Напишите код, преобразующий массив цифр, которые располагаются неупорядоченно, в
// массив цифр расположенных по убыванию их значений.
var numerics = [5, 7, 2, 9, 3, 1, 8];
numerics.sort((a,b)=> {return b-a});
// Ваш код 
console.log(numerics);// [9,8,7,5,3,2,1]

// Напишите код, объединяющий три массива цифр, и располагающий цифры, в полученном массиве, в
// порядке убывания их значений.

var a19 = [1,2,3];
var b19 = [4,5,6];
c19 = [7,8,9];
function getArr(a, b, c) {
const newnArray = [].concat(a, b, c);
newnArray.sort((a,b)=> {return b-a})
// Ваш код 
console.log(newnArray);
}
getArr(a19, b19, c19); // [9,8,7,6,5,4,3, 2, 1]

// Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму
// элементов этого массива. Массив, конечно же, может быть произвольным. Показать решение.
let arrg = [[1, 2, 3], [4, 5], [6]];
let sumg = 0;
for (let i = 0; i < arrg.length; i++) {
	for (let j = 0; j < arrg[i].length; j++) {
		sumg += arrg[i][j];
	}
}
console.log(sumg);

// Дан трехмерный массив с числами, например [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]. 
// Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.
arss = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
let sumg1 = 0;
for (let i = 0; i < 2; i++) {
	for (let j = 0; j < 2; j++) {
        for (let f = 0; f < 2; f++) {
		sumg1 += arss[i][j][f];
        }
	}
}
console.log(sumg1);
// for (let i = 0; i < arss.length; i++) {
//     for (let j = 0; j < ass[i].length; j++) {

// }