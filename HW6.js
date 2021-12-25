// Window
// Дмитрий
// undefined
// undefined
// Дмитрий
// undefined
// undefined undefined
// undefined
// undefined
// Владимир
// Hello, World! каждую секунду
// logMessage.call(object);
// undefined
// 14,15 const calculator = {
//   setValues: function(a,b){
//     this.a = a;
//     this.b = b;
//     if (typeof (a, b) !== "number") {
//       console.log("Ошибка1");
//     } else return this.a, this.b;
//   },
//   sum() {
//     if (this.a && this.b) {
//       return this.a + this.b;
//     } else {
//       console.log("Ошибка2");
//     }
//   },
//   mult() {
//     if (this.a && this.b) {
//       return this.a * this.b;
//     } else {
//       console.log("Ошибка3");
//     }
//   },
// };
// calculator.setValues(100, 20);
// console.log(calculator.sum(), calculator.mult(), calculator);
// const calculator2 = {
//     setValues: calculator.setValues,
//     div() {
//       if (this.a && this.b) {
//         return this.a / this.b;
//       } else {
//         console.log("Ошибка4");
//       }
//     },
//     diff() {
//       if (this.a && this.b) {
//         return this.a - this.b;
//       } else {
//         console.log("Ошибка5");
//       }
//     },
// };
// calculator2.setValues(5,6);
// console.log(calculator2.div(), calculator2.diff(), calculator2);
// 16. 
// const user1 = {
//     name: '',
//     age: '',
//     city: '',
//     favoriteColor: '',
//     setName: function(name){
//         this.name = name;
//     },
//     setAge: function(age){
//         this.age = age;
//     },
//     setCity: function(city){
//         this.city = city;
//     },
//     setColor: function(color){
//         this.favoriteColor = color;
//     },
// }
// user1.setName('Кирилл');
// user1.setAge(20);
// user1.setCity("Нижний Новгород");
// user1.setColor('Красный');
// console.log(user1);
// const user2 = Object.assign({}, user1);
// user2.setName('Вася');
// user2.setAge(28);
// user2.setCity("Москва");
// user2.setColor('Синий');
// console.log(user2);
// Реализовать функцию, которая принимает в себя любое количество числовых аргументов и
// возвращает наименьшее число. (не использовать Math.min).
// function minimal(){
//     let min = arguments[0];
//     for (let i = 0; i < arguments.length; i++){
//             if(arguments[i] < min){
//                 min = arguments[i];
//             };
//        }
//        return min;
//    }
//    console.log(minimal(1,2,3,4,5,6,1,2,-53,4,-6));
// Исправьте код таким образом, чтобы вывод логов соответствовал комментариями
// const func = (user) => {
//   const otherUser = Object.assign({}, user);
//   otherUser.name = 'Дмитрий';
//   otherUser.surName = 'Сидоров';
//   return otherUser;
// }

// const  firstUser = {
//   name: 'Василий',
//   surName: 'Иванов'
// }

// console.log(func(firstUser)) // { name: 'Дмитрий', surName: 'Сидоров' }

// console.log(firstUser) // { name: 'Василий', surName: 'Иванов' }

const Mag = {
    name: 'Алдуин',
    level: 15,
    strength: 5,
    agility: 3,
    intellect: 10,
    atack: function () {
        return (this.strength + this.agility);
    },
    fireball: function () {
        return (this.level * this.intellect);
    },
    combo: function () {
        return (this.atack() + this.fireball());
    },
};
const Hero = Object.assign({}, Mag);
Hero.name = 'Артур';
Hero.level = 19;
Hero.strength = 20;
Hero.agility = 12;
Hero.intellect = 3;

function startFight(obj1, obj2) {
    if (obj1.combo() > obj2.combo()) {
        console.log(`Победил ${obj1.name}`);
    } else console.log(`Победил ${obj2.name}`);
}
startFight(Mag, Hero);