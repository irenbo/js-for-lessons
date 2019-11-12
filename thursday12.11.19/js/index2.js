let barsik = new Cat("Барсик");
barsik.health = 20;
barsik.attackScore = 10;
console.log(barsik);
barsik.eat("Мышь");

let tomas = new Cat("Томас");
tomas.health = 22;
tomas.attackScore = 8;
tomas.run();

tomas.attack(barsik);
barsik.attack(tomas);

let human = new Human("Иван");
human.age = 26;
human.cat = barsik;

console.log(human);

human.cat = tomas;


let dog = new Dog("Граф");
console.log(dog);
tomas.health = 40;
tomas.attackScore = 15;
human.dog = dog;


human.trainDog("сидеть");
human.askCommand("лежать");
human.askCommand("сидеть");

human.playWithCat();

const shortestPath = (start, end, dict, path=[]) => {
    if (start === end) {
        return 2
    }

    let results = [];
    for (var i = 0; i < start.length; i++ ) {
        for (var j ='a'.charCodeAt(0); j<='z'.charCodeAt(0); j++) {
            let next = start.substring(0, i) + String.fromCharCode(j) + start.substring(i+1)
            if (dict.indexOf(next) > -1 && path.indexOf(next) === -1) {
                console.log(next);
                results.push(shortestPath(next, end, dict, path.concat(next)) + 1)
            } else if (next === end) {
                return 2
            }
        }
    }
    return Math.min(...results)
}

let start = "hit";
let end = "cog";
let dict = ["hot","dot","dog","lot","log"];

console.log(shortestPath(start, end, dict));