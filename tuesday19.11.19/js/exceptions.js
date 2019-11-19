// Конструкция try..catch
try {

    // код...

} catch (err) {

    // обработка ошибки

}

// Оператор «throw»
// Оператор throw генерирует ошибку.

// throw <объект ошибки>

let error1 = new Error("mess");
// или
let error2 = new SyntaxError("mess");
let error3 = new ReferenceError("mess");

if (true){
    throw new Error("ggg");
}

// try {
// ... пробуем выполнить код...
// } catch(e) {
// ... обрабатываем ошибки ...
// } finally {
// ... выполняем всегда ...
// }