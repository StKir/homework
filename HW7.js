// Реализовать объект пользователя с полями name, lastname ,middleName, birthDate.
// Реализовать геттер/сеттер fullname, который возвращает одной строкой полное имя
// пользователя и записывает имя, фамилию и отчество при присвоении значения. Реализовать
// геттер age, который возвращает возраст используя данные даты рождения.
const profile = {
    name: null,
    lastname: null,
    middleName: null,
    birthDate: '2001-10-16',
    get fullname(){
        return `${this.name} ${this.middleName} ${this.lastname}`;
    },
    set fullname(fullName){
        let indA = fullName.indexOf(' ');
        let indB = fullName.indexOf(' ', indA+1);
        this.lastname = fullName.substring(0, indA);
        this.name = fullName.substring(indA+1, indB);
        this.middleName = fullName.substring(indB+1);
    },
    get age(){
        let t = Date.parse(this.birthDate) - Date.parse(new Date());
        let days = Math.floor(t / (1000 * 60 * 60 * 24));
        days = days*-1;
        return `${Math.floor(days/365.25)} лет`;
    }
};
profile.fullname = 'Струков Кирилл Рудольфович';
console.log(profile.fullname);
console.log(profile.age);