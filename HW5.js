// Удаление указанного количества символов из строки

// Напишите функцию delete_characters(str, length), которая возвращает подстроку, 
// состоящую из указанного количества символов.

var str = 'Каждый охотник желает знать';
function delete_characters(str, length) {
    return a = str.substr(0, length);
};
// Вставить тире между словами строки
// Напишите функцию insert_dash(str), которая принимает строку str в
// качестве аргумента и вставляет тире (-) между словами. При этом все символы строки
// необходимо перевести в верхний регистр.

var str = "HTML JavaScript PHP";
let str2 = '';
function insert_dash(str) {
    for(let i = 0; i<str.length; i++){
        if(str[i] == ' '){
            str2+='-'
        }else{
            str2+=str[i];
        }
    }
    console.log(str2);
}
// Сделать первую букву строки прописной
// Напишите функцию, которая принимает строку в качестве аргумента и
// преобразует регистр первого символа строки из нижнего регистра в верхний.

var str = "string not starting with capital";  
 
function cursive_letter(str) {
    str = str[0].italics().toUpperCase() + str.substr(1, str.length);
    return str
}
console.log(cursive_letter('string not starting with capital'));



