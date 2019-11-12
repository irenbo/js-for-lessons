class Human {
    constructor(name){
        this._name = name;
        this._age = 0;
        this._cat = null;
        this._dog = null;
    }


    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        this._age = value;
    }

    get cat() {
        return this._pet;
    }

    set cat(value) {
        if (!(value instanceof Cat)){
            return;
        }
        console.log(`${this._name} завел ${value.name}`);
        this._cat = value;
    }


    get dog() {
        return this._dog;
    }

    set dog(value) {
        this._dog = value;
    }

    trainDog(comand){
        this._dog.learnCommand(comand);
    }

    askCommand(command){
        this._dog.doCommand(command);
    }

    playWithCat(){
        this._cat.play();
    }
}

