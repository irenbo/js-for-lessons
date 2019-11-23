// Регулярные выражения (RegExp)
// искать текст в строке
// заменять подстроки в строке
// извлекать информацию из строки

function log(str, regexp, data) {
    console.log(`результат: ${data}, строка ${str}, шаблон ${regexp}`);
}

let regExp1 = new RegExp('reg');
let regExp2 = /reg expression/;

let string = 'We love reg exp in JavaScript';
log(string, regExp1, regExp1.test(string));
log(string, regExp2, regExp2.test(string));

// начинаются ^ заканчиваются $

// Поиск элементов по диапазону
regExp1 = /[0-9]/;
log(string, regExp1, regExp1.test(string));
regExp1 = /[a-z]/;
log(string, regExp1, regExp1.test(string));
regExp1 = /[A-Z]/;
log(string, regExp1, regExp1.test(string));
regExp1 = /[0-9a-zA-Z]/;
log(string, regExp1, regExp1.test(string));

/*
Метасимволы:
\d совпадает с любым числом, эквивалентно [0-9]
\D совпадает с любым символом, который не является числом, эквивалентно [^0-9]
\w совпадает с любым буквенно-числовым символом, эквивалентно [A-Za-z0-9]
\W совпадает с любым символом, который не является буквенно-числовым значением, эквивалентно [^A-Za-z0-9]
\s совпадает с любым пробельным символом: пробел, табуляция, символ новой строки и пробелы Unicode
\S совпадает с любым символом, который не является пробелом
\n совпадает с символом новой строки
\t совпадает с символом табуляции
\uXXXX совпадает с символом Unicode с кодом XXXX (требуется флаг u)
. совпадает с любым символовом, кроме символа новой строки (таким как \n) (если вы не используете флаг s, объясним позже)
[^] совпадает с любым символом, включая символ новой строки. Полезно при работе с многострочными строками
[^c]ar - не с
*/

regExp1 = /\s/g;
// i Нечувствительность к регистру: делает выражение нечувствительным к регистру.
// g Глобальный поиск: поиск шаблона во всей строке ввода.
log(string, regExp1, string.replace(regExp1, "TTT"));

// выбор
string = 'We love reeg exp in JavaScript veeery match';
regExp1 = /[j|v]a/ig;
log(string, regExp1, string.match(regExp1));

// Квантификаторы
/*
. соответствует любому единичному символу
* 0 или больше повторений предшествующего символа
+ 1 или больше повторений предшествующего символа
? Делает предшествующий символ необязательным (0 или 1 раз)
{n,m} Возвращает как минимум "n", но не более "m" повторений предшествующего символа
{n} "n" повторений предшествующего символа
{n,} "n" и более повторений предшествующего символа
* */
regExp1 = /e{2,}/g;
log(string, regExp1, string.match(regExp1));
regExp1 = /c.+t/g;
string = "The fat cat sat on the mat";
log(string, regExp1, string.match(regExp1));

string = "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, " +
    "by injected humour, or randomised words which don't look even slightly believable. " +
    "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.";
regExp1 = /\b\w+\b/g;
console.log(string.match(regExp1));
// жадный режим
// режимы квантификаторов: жадный / ленивый / сверхжадный
string = "There are many variations of passages of Lorem Ipsum available";
regExp1 = /a.+o/;
console.log(string.match(regExp1));

regExp1 = /a.+?o/;
console.log(string.match(regExp1));

// Группа символов - это группа подшаблонов, которая записывается внутри скобок (...)
string = "The fat cat sat on the mat";
regExp1 = /(f|c|s)at/g;
console.log(string.match(regExp1));
regExp1 = /(T|t)he|fat/;
console.log(string.match(regExp1));

regExp1 = /\S+\.(?:jpg|jpeg|png)$/;
string = "eee.jpg";
log(string, regExp1, regExp1.test(string));

// string = '/<img[^>]+>/i';
console.log(string.match(regExp1));
// Lookbehind и lookahead используются для поиска, но сами в него не входят
// Используя позиционную проверку, мы никуда не перемещаемся
// проверь, какой символ находится справа от тебя и, возможно, ещё несколько символов после него
// .* позволит "заглянуть" очень далеко, но как бы с использованием бинокля,
//     то есть мы "смотрим" вперёд с того места, на котором стоим, никуда не перемещаясь
// Позиционную проверку необходимо привязывать


// эта часть выражения должна следовать за впереди идущим выражением
regExp1 = /(?=.*[0-9])(?=.*[,/?])(?=.*[A-Z])[0-9a-zA-Z!,/].{3,}/;

// Задача состоит в том, чтобы собрать все цены, которые находятся между тегами <a>… </a>


// (?!)
/*Все предложения (начинаются с заглавной буквы, заканчиваются . ? !*/
// regExp1 = "[A-Z].+?(.!?)";

