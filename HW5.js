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
console.log(cursive_letter(str));

// Первая буква каждого слова заглавная
// Напишите функцию capitalize(str), которая возвращает строку, в которой
// каждое слово начинается с заглавной буквы.
var str = "каждый охотник желает знать";  
let NewStr = '';
function capitalize(str) {
    for(let i = 0; i < str.length; i++){
        if(str[i-1] == ' ' || i == 0){
            NewStr += str[i].toUpperCase();
        }else {
            NewStr += str[i];
        }
    }
    return NewStr;
}
console.log(capitalize(str));


// Напишите функцию change_register(str), которая принимает в качестве аргумента
// строку и и заменяет регистр каждого символа на противоположный. Например, если вводится
// «КаЖдЫй ОхОтНиК», то на выходе должно быть «кАжДыЙ оХоТнИк».

var str = "КаЖдЫй ОхОтНиК жЕлАеТ зНаТь";  
let rezz = '';
function change_register(str) {
    for(let i = 0; i < str.length; i++)
        if(str[i] == str[i].toUpperCase()){
            rezz+=str[i].toLowerCase();
        }else{
            rezz+=str[i].toUpperCase();
        }
        return rezz;
}
console.log(change_register(str));

// Напишите функцию remove_char(str), которая возвращает строку, очищенную от
// всех не буквенно-цифровых символов.


var str = "every., -/ hunter #! wishes ;: {} to $ % ^ & * know";  
let alfavit = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789 "
let rez = '';
function remove_char(str) {
    for(let i = 0; i < str.length; i++){
        for(let j = 0; j < alfavit.length; j++ ){
            if(str[i] == alfavit[j]){
                rez += str[i];
            }
        }
    }
    return rez;
};
console.log(remove_char(str));
// пробелы

// Напишите функцию zeros(num, len), которая дополняет нулями до указаной
// длины числовое значение с дополнительным знаком «+» или « -« в зависимости от
// передаваемого аргумента.
function zeros (num, len, sign) {
    let rezzz = '';
    if(sign == '-'){
        rezzz = '-';
    }else if(sign == '+') rezzz = '+';
    for(let i = 0; i < len - String(num).length; i++){
        rezzz+='0';
    }
    rezzz+= num;
    return rezzz;
};
console.log(zeros (54, 9, '-'))
