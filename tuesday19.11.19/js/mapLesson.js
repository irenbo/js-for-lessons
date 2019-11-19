class Good {
    constructor(title, price, id){
        this._id = id;
        this._title = title;
        this._price = price;
    }
    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        this._price = value;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    toString(){
        return `id=${this._id}, title=${this._title}, price=${this._price}`;
    }
}

let good1 = new Good("телефон", 30000, 1);
let good2 = new Good("машина", 300000, 2);
let good3 = new Good("книга", 3000, 3);

// Map – это коллекция ключ/значение
// ключи могут быть любого типа
let goods = new Map();
goods.set(good1.id, good1);
goods.set(good2.id, good2);
goods.set(good3.id, good3);

console.log(goods.has(2));
console.log(goods.get(2));
console.log(goods.size);
goods.delete(1);
console.log(goods.has(1));
// goods.clear();
// console.log(goods.size);

// Перебор Map
let keys = goods.keys();
for (let good_key of keys){
    console.log("key " + good_key);
}
let values = goods.values();
for (let good_value of values){
    console.log("value " + good_value.title);
}
let entries = goods.entries();
for (let good of goods){
    console.log(good);
}

goods.forEach((value, key, map) => {
    console.log(`${key}: ${value}`);
});

// мап из объекта
// let obj = Object.fromEntries(map); // убрать .entries()
// let prices = Object.fromEntries([
//     ['banana', 1],
//     ['orange', 2],
//     ['meat', 4]
// ]);
// // now prices = { banana: 1, orange: 2, meat: 4 }
// alert(prices.orange); // 2
//
// let obj = {
//     name: "John",
//     age: 30
// };
//
// let map1 = new Map(Object.entries(obj));

// множество set
let set = new Set();
set.add(good1);
set.add(good2);
set.add(good1);
set.add(good3);

console.log(set.size);


