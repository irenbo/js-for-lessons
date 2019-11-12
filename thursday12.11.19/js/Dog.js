class Dog extends Animal{

    constructor(name) {
        super(name);
        this._commands = [];
    }

    learnCommand(comand){
        console.log(`${this.name} учит новую команду: ${comand}`);
        this._commands.push(comand);
    }

    doCommand(comand){
        if (!this._commands.includes(comand)) {
            console.log(`${this.name} еще не знает команды ${comand}`);
            return;
        }
        console.log(`${this.name} выполнил команду ${comand}`);
    }
}