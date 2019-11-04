console.log(document); // весь документ
console.log(document.body); // body

let list = document.getElementById("list");
console.log(list);

// перемещение по DOM дереву
// для каждого элемента можно получить
console.log(list.childNodes); // все узлы
console.log(list.children); // узлы html теги

// DOM коллекции нельзя изменить
// Перебор коллекций осуществляется циклом for...of
for (let elem of list.children){
    console.log(elem);
}

console.log(list.firstChild); // первый дочерний узел
console.log(list.lastChild); // последний дочерний узел

console.log(list.firstElementChild);// первый дочерний тег узел
console.log(list.lastElementChild);// последний дочерний тег узел

console.log(list.previousSibling); // предыдущий узел
console.log(list.nextSibling); // следующий узел

console.log(list.previousElementSibling); // предыдущий элемент
console.log(list.nextElementSibling); // следующий элемент (узел тег)

console.log(list.parentNode); // родительский узел
console.log(list.parentElement); // родительский узел-тег

// поиск элементов в DOM
// 1. получение элемента по id (id должны быть уникальными)
list = document.getElementById("list");
console.log(list);

// 2. по атрибуту name
let elementsByName = document.getElementsByName("data");
console.log(elementsByName);

console.log(elementsByName[0]);

// 3. по имени тега
let liTag = document.getElementsByTagName("li");
console.log(liTag);
console.log(liTag[0]); // доступ к элементу по индексу

// 4. по имени класса
let someClassElems = document.getElementsByClassName("some-class");
console.log(someClassElems);

// 5. по селектору
let queryFirst = document.querySelector("ul>li");
console.log(queryFirst);

let queryAll = document.querySelectorAll("input[type=text]");
console.log(queryAll);

// создание элементов
let div = document.createElement("div");

// работа с атрибутами
// проверяет наличие атрибута
console.log(div.hasAttribute("id"));
// устанавливает атрибут
div.setAttribute("id", "container");
// получить зачение атрибута
console.log(div.getAttribute("id"));

// атрибут style
div.style.cssText=`
    width: 500px;
  `;

div.style.background = "yello";

// получить все стили элемента
let listStyles = getComputedStyle(list);
console.log(listStyles.background);
console.log(listStyles.marginTop);

// работа с классами (CSS классы)
//  добавить класс
div.classList.add("class-name");
// удалить класс
div.classList.remove("class-name");
// добавитиь или удалить
div.classList.toggle("class-name");
div.classList.contains("class-name"); // проверяет наличие

// добавление элементов
// node.append(...nodes or strings) – вставляет в node в конец,
// node.prepend(...nodes or strings) – вставляет в node в начало,
// node.before(...nodes or strings) –- вставляет прямо перед node,
// node.after(...nodes or strings) –- вставляет сразу после node,

// elem.insertAdjacentHTML(where, html)
// Первый параметр – это специальное слово, указывающее, куда по отношению к elem производить вставку. Значение должно быть одним из следующих:
//
// "beforebegin" – вставить html непосредственно перед elem,
// "afterbegin" – вставить html в начало elem,
// "beforeend" – вставить html в конец elem,
// "afterend" – вставить html непосредственно после elem.

// node.replaceWith(...nodes or strings) –- заменяет node.
// node.remove() –- удаляет node.
// elem.cloneNode(deep) – клонирует элемент, если deep==true, то со всеми дочерними элементами.

// Устаревшие методы:
// parent.appendChild(node)
// parent.insertBefore(node, nextSibling)
// parent.removeChild(node)
// parent.replaceChild(newElem, nod)

for (let i = 0; i < 5; i++) {
    let p = document.createElement("p");
    // Свойство textContent предоставляет доступ к тексту внутри элемента за вычетом всех <тегов>.
    p.textContent = `Текстовый абзац ${i}`;
    p.classList.add("border");
    div.append(p);
}
document.body.prepend(div);

// работа с таблицами
let allTables = document.getElementsByTagName("table");
let table = allTables[0];
table.setAttribute("border", "1");

let caption = table.createCaption();
caption.innerText = "Caption";

let row = table.insertRow(0);

let cell1 = row.insertCell(0);
let cell2 = row.insertCell(1);

cell1.innerText = "Cell 1";
cell2.innerText = "Cell 2";
