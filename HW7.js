// Реализовать объект пользователя с полями name, lastname ,middleName, birthDate.
// Реализовать геттер/сеттер fullname, который возвращает одной строкой полное имя
// пользователя и записывает имя, фамилию и отчество при присвоении значения. Реализовать
// геттер age, который возвращает возраст используя данные даты рождения.
const profile = {
    name: null,
    lastname: null,
    middleName: null,
    birthDate: '2001-10-16',
    get fullname() {
        return `${this.name} ${this.middleName} ${this.lastname}`;
    },
    set fullname(fullName) {
        let indA = fullName.indexOf(' ');
        let indB = fullName.indexOf(' ', indA + 1);
        this.lastname = fullName.substring(0, indA);
        this.name = fullName.substring(indA + 1, indB);
        this.middleName = fullName.substring(indB + 1);
    },
    get age() {
        let t = Date.parse(this.birthDate) - Date.parse(new Date());
        let days = Math.floor(t / (1000 * 60 * 60 * 24));
        days = days * -1;
        return `${Math.floor(days/365.25)} лет`;
    }
};
profile.fullname = 'Струков Кирилл Рудольфович';
console.log(profile.fullname);
console.log(profile.age);

// С помощью замыкания реализовать реализуйте генератор случайных чисел в указанном 
// промежутке (min и max). Важное условие: при генерировании чисел они не должны повторяться.
const randNum = (min,max) =>{
    let a;
    let b;
 return ()=>{
    a = Math.floor(Math.random()*(max-min) + min);
    while(a==b){a=Math.floor(Math.random()*(max-min) + min)}
    b = a;
    return a;
};
} 
const random10 = randNum(8,10);
console.log(random10());
console.log(random10());
//ну хотябы 2 вызова всегда будут разными
// 3. Что выведет функция? 
// function f() {
//   alert( this ); // window
// }
// let user = {
//   g: f.bind(null)
// };
// user.g();// window

// 4. Можем ли мы изменить this дополнительным связыванием?
function f() {
    console.log(this.name);
}

f = f.bind( {name: "Вася"} ).bind( {name: "Петя" } );

f();//не можем

// 5. Вызов askPassword() в приведённом ниже коде должен проверить пароль и затем вызвать user.loginOk/loginFail в зависимости от ответа.
// В текущей реализации Сообщение не соответствует тому, что мы ожидаем увидеть(“Имя пользователя  logged in” или “Имя пользователя failed to log in”)

// Исправьте выделенную строку, чтобы всё работало (других строк изменять не надо).

function askPassword(ok, fail) {
  let password = prompt("Password?", '');
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: 'Вася',

  loginOk() {
    alert(`${this.name} logged in`);
  },

  loginFail() {
    alert(`${this.name} failed to log in`);
  },

};

// askPassword(user.loginOk, user.loginFail);
askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
// .Напишите в указанном месте конструкцию с методом bind() так, чтобы this внутри функции func всегда указывал на value
var elem = {value: "Привет"}

function func(surname, name) {
	alert(this.value + ', ' + surname + ' ' + name);
}
let boundFunc = func.bind(elem);
//Тут напишите конструкцию с bind()

boundFunc('Иванов', 'Иван'); //тут должно вывести 'привет, Иванов Иван'
boundFunc('Петров', 'Петр'); //тут должно вывести 'привет, Петров Петр'

// Есть функция const sum = (a, b, c) => a + b + c, которая складывает три числа.
// Выполните каррирование. Т.е. напишите вспомогательную функцию currySum, в которую
// вы передадите функцию sum, и которую можно будет вызвать слуедующим образом -  currySum(a)(b)(c). 
const sum = (a, b, c) => a + b + c;
let cur = (sum) => {
    return (a)=>{
        return(b)=>{
            return(c)=>{
                return a+b+c;
            }
        }
    }
}
let currySum = cur(sum);
console.log(currySum(50)(30)(1));