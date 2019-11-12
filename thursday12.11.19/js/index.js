function Cat(name, speed) {
    this._voiceSound = "Мяу";
    this._name = name;

    this.eat = function (food) {
        console.log(`${this._name} ест ${food}`)
    }
}

Cat.prototype.run = function(){
    console.log(`${this._name} бежит`);
};

Cat.prototype.say = function(){
    console.log(`${this._name} говорит ${this._voiceSound}`);
};

let myrka = new Cat("Мурка");
console.log(myrka);
console.log(myrka._name);
myrka.run();
myrka.say();
myrka.eat("молоко");

let tomas = new Cat("Томас");
console.log(tomas);
console.log(tomas._name);
tomas.run();
tomas.say();
tomas.eat("мясо");
