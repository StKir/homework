// Сделайте функцию, которая возвращает квадрат числа. Число передается параметром.
function Squrare (num) {
    return num ** 2
}
// Сделайте функцию, которая возвращает сумму двух чисел.
function summTwoNum (num1, num2) {
    return num1 + num2
}
// Сделайте функцию, которая отнимает от первого числа второе и делит на третье.
function Zadacha3 (num1, num2, num3) {
    return ((num1 - num2)/num3)
}
// Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает
// день недели на русском языке.
function Zadacha4 (num){
    switch (num){
        case 1:
        console.log('пн');
        break
        case 2:
        console.log('вт');
        break
        case 3:
        console.log('ср');
        break
        case 4:
        console.log('чт');
        break
        case 5:
        console.log('пт');
        break
        case 6:
        console.log('сб');
        break
        default:
        console.log('вс');
    }
}
// Сделайте функцию, которая параметрами принимает 2 числа.
// Если эти числа равны - пусть функция вернет true, а если не равны - false.
function  Zadacha5 (num1, num2){
    if(num1 === num2){
        console.log(true);
    }else console.log(false);
}
// Сделайте функцию, которая параметрами принимает 2 числа. Если их сумма 
// больше 10 - пусть вернет true, а если нет то - false.
function  Zadacha6 (num1, num2){
    if(num1 + num2 > 10){
        console.log(true);
    }else console.log(false);
}
// Сделайте функцию, которая параметром принимает число и проверяет -
// отрицательное оно или нет. Если отрицательное - пусть функция вернет true,
// а если нет - false.
function  Zadacha7 (num){
    if(num < 0){
        console.log(true);
    }else console.log(false);
}
// Сделайте функцию isNumberInRange, которая параметром принимает
//  число и проверяет, что оно больше нуля и меньше 10. Если это так - пусть
//  функция возвращает true, если не так - false.

 function isNumberInRange (num) {
    return num > 0 && num < 10 ? true : false;
 }
//  Создайте функцию rgb(), которая будет принимать три числовых аргумента
//  и возвращать строку вида «rgb(23,100,134)». Если аргументы не заданы,
//  считать их равными нулю. Не проверять переменные на тип данных
function rgb (c1 = 0, c2 = 0, c3 = 0) {
    console.log(`rgb(${c1},${c2},${c3})`);
}
// Написать функцию, которая принимает в себя три параметра -
// число и две функции. Первая переданная функция  возвращает возведенное
// в квадрат переданное число и будет вызываться, если число четное. Вторая
// переданная коллбэк-функция будет вызываться с переданным в нее числом , если
// число нечетное, и будет возвращать число, увеличенное на 1.
 //не понял задачу!

//  Написать функцию mult(num1, num2 , num3) принимающую 3 числа. Функцию
//  перемножает num1 и num2 столько раз, сколько указано в третьем аргументе num3. 
//  Значения num1 и num2 по умолчанию 1,  num3 по умолчанию 2. 
let sum = 0;
function mult(num1, num2 , num3) {
    for(let i = 1; i <= num3; i++){
        sum += num1 + num2
    }
    return sum
}
// Написать функцию, которая принимает 3 аргумента(каждый аргумент - 1 слово) и
// возвращает строку с этими 3 словами, расположенными в алфавитном порядке.
function Zadacha12(str1 = '', str2 = '', str3 = '') {
    let arr =[str1 , str2 ,str3];
    arr = arr.sort();
    console.log(String(arr));
}

// Дан массив с числами. Запишите в новый массив только те числа,
// которые больше нуля и меньше 10-ти. Для этого используйте вспомогательную
// функцию isNumberInRange из предыдущей задачи.
let arr = [1,-24,2,5,-6,0,5,-21];
let newArray =[];
let i = 0;
arr.forEach((element)=>{
    if(isNumberInRange(element) === true){
        newArray[i] = element;
        i++;
    }
});
console.log(newArray);

// Сделайте функцию getDigitsSum (digit - это цифра), которая
// параметром принимает целое число и возвращает сумму его цифр.
function getDigitsSum(num) {
    let sum = 0;
    let str = String(num);
    for(let i = 0; i < str.length; i++){
    sum += Number(str[i]);
    } 
    return sum;
}
// Найдите все года от 1 до 2020, сумма цифр которых равна 13.
// Для этого используйте вспомогательную функцию getDigitsSum из предыдущей задачи.
let c = 0;
let newArry = [];
for( let i = 1; i < 2020; i++){
    if(getDigitsSum(i) === 13){
        newArry[c] = i;
        c++
    }
}
console.log(newArry);
// Сделайте функцию isEven() (even - это четный), которая параметро
//  принимает целое число и проверяет: четное оно или нет. Если четное -
//  пусть функция возвращает true, если нечетное - false.
function isEven(num){
    return num % 2 === 0 ? true : false ;
}
// Дан массив с целыми числами. Создайте из него новый массив,
// где останутся лежать только четные из этих чисел. Для этого используйте
// вспомогательную функцию isEven из предыдущей задачи.
const OldArray = [1,5,6,3,4,7,9,2,5,6];
let NewMas = [];
OldArray.forEach((item)=>{
    if(isEven(item) === true){
        NewMas.push(item);
    }
})
console.log(NewMas);
// Сделайте функцию getDivisors, которая параметром принимает число и
// возвращает массив его делителей (чисел, на которое делится данное число без остатка).
function getDivisors(num){
    let NewArray = [];
    for(let i = 1; i <= num; i++){
        if(num % i == 0){
            NewArray.push(i);
        }
    }
    console.log(NewArray)
}
getDivisors(50);
// Дан массив с числами. Выведите последовательно его элементы
// используя рекурсию и не используя цикл.
let Mas = [1,6,5,8,0,5,-8,2,3,5,7,4,6];
let nn = 0;
function GetNumMas(){
    console.log(Mas[nn]);
    nn++;
    if(Mas.length > nn){
        GetNumMas();
    }
}
GetNumMas();

// Дано число. Сложите его цифры. Если сумма получилась более 9-ти,
// опять сложите его цифры. И так, пока сумма не станет однозначным числом (9 и менее).
function Zadacha20 (num){
    let a = getDigitsSum(num);
    while(a > 9){
        a = getDigitsSum(a);
    }console.log(a);
}
Zadacha20(759658697458);
// console.log(Zadacha3(6,2,2))