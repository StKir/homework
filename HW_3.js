// Работа с if-else

const a = 1; // 
if (a == 0){ //(2. a > 0 3. a < 0, 4. a >=0, 5. a <= 0, a === 'test', a === 1)
    console.log('Верно');
}else {
    console.log('Неверно');
}

// Работа с логическими переменными
let test = true;
if (test === true){ // (2.test !== true)
    console.log('Верно');
}else {
    console.log('Неверно');
}  
// Работа с && (и) и || (или)

let a0 = 2;
if (a > 0 && a < 5){ 
    console.log('Верно');
}else {
    console.log('Неверно');
}  

let a1 = 2;
if (a1 === 0 || a1 === 2){
    a1 = a1+7
}else{
    a1 = a1/10;
}
console.log(a1);

let a2 = 0,
    b = 3;
if(a2 <= 1 && b >=3){
    console.log(a2 + b);
}else{
    console.log(a2 - b);
}

// Если переменная a больше 2-х и меньше 11-ти, или переменная b больше
// или равна 6-ти и меньше 14-ти, то выведите 'Верно', в противном случае выведите 'Неверно'.

let a3 = 5,
    b1 = 10;
if(a3 > 2 && a3 < 11 || b1 >=6 && b1 < 14){
    console.log('Верно');
}else {
    console.log('Неверно');
} 
// Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она имеет значение '1', 
// то в переменную result запишем 'зима', если имеет значение '2' – 'весна' и так далее. 
// Решите задачу через switch-case.

const num = 3;
let result;
switch(num){
    case 1:
    result = 'zima';
    break    
    case 2:
    result = 'vesna';
    break
    case 3:
    result = 'leto';
    break
    default:
    result = 'osen';
}
console.log(result);

// В переменной day лежит какое-то число из интервала от 1 до 31. 
// Определите в какую декаду месяца попадает это число (в первую, вторую или третью).

const day = 22;
 if (day < 11){
     console.log('1 dekada')
 }else  if(day < 21){
    console.log('2 dekada')
} else{
    console.log('3 dekada')
}

// В переменной month лежит какое-то число из интервала
// от 1 до 12. Определите в какую пору года попадает этот
// месяц (зима, лето, весна, осень).

const month = 5;

switch(month){
    case 1:
    case 2:
    case 3:
        console.log('zima');
        break;
    case 4:
    case 5:
    case 6:
        console.log('vesna');
        break;
    case 7:
    case 8:
    case 9:
        console.log('leto');
        break;
    default:
        console.log('ocen');
}

// Напишите программу, которая выводит на экран числа от 1 до 100. При этом вместо чисел, 
// кратных трем, программа должна выводить слово «Fizz», а вместо чисел, кратных пяти — слово
// «Buzz». Если число кратно и 3, и 5, то программа должна выводить слово «FizzBuzz»
for(let i = 1; i < 101; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log('FizzBuzz');
    }else{
        if(i % 5=== 0){
        console.log('Buzz');
    }else{
        if(i % 3 === 0){
            console.log('Fizz');
        }else{
            console.log(i);
        }
    }} 
}
// Дана строка, состоящая из символов, например, 'abcde'. Проверьте, 
// что первым символом этой строки является буква 'a'. Если это так - выведите
// 'да', в противном случае выведите 'нет'.
const strok = 'abcde';
if(strok.substr(0,1) === 'a'){
    console.log('da');
}else console.log('net');

// Дана строка с цифрами, например, '12345'. Проверьте, что первым символом этой
// строки является цифра 1, 2 или 3. Если это так - выведите 'да', в противном случае
// выведите 'нет'.
const nstrok = '12345';
const x = nstrok.substr(0,1);
switch (x){
    case '1':
    case '2':
    case '3':
        console.log('da');
        break;
    default:
        console.log('net');
}
// Дана строка из 3-х цифр. Найдите сумму этих цифр. То есть сложите
// как числа первый символ строки, второй и третий.

const numstr = '154';
let res = 0;
for(let i = 0; i < numstr.length; i++){
 res += (Number(numstr[i]))
}
console.log(res);

// Дана строка из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых
// трех цифр. Если это так - выведите 'да', в противном случае выведите 'нет'.
const sixstr = '148931';
let res1 = 0;
let res2 = 0;
for(let i = 0; i < 3; i++){
 res1 += (Number(sixstr[i]));
};
for(let i = 3; i < 6; i++){
    res2 += (Number(sixstr[i]));
   };
   if(res1 === res2){
       console.log('da');
   }else console.log('net');

//    Циклы while и for


