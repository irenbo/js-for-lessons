class Animal {
    constructor(name) {
        this._speed = 10;
        this._name = name;
        this._maxHealth = 0;
        this._health = 0;
        this._attackScore = 0;
    }


    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get speed() {
        return this._speed;
    }

    set speed(value) {
        this._speed = value;
    }

    get maxHealth() {
        return this._maxHealth;
    }

    set maxHealth(value) {
        this._maxHealth = value;
    }

    get health() {
        return this._health;
    }

    set health(value) {
        this._health = value;
    }

    get attackScore() {
        return this._attackScore;
    }

    set attackScore(value) {
        this._attackScore = value;
    }

    run(){
        console.log(`${this._name} бежтит со скоростью ${this._speed}`);
    }

    eat(food){
        if (this._health < this._maxHealth) this._health += 1;
        console.log(`${this._name} ест ${food}`);
    }

    attack(otherAnimal) {
        if (!(otherAnimal instanceof Animal)) return;
        console.log(`${this._name} напал на ${otherAnimal.name}`);
        otherAnimal.health -= this._attackScore;
    }
}