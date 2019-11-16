class Validator {

    get rules() {
        return this._rules;
    }

    set rules(value) {
        this._rules = value;
    }

    get messages() {
        return this._messages;
    }

    set messages(value) {
        this._messages = value;
    }

    get submitHandler() {
        return this._submitHandler;
    }

    set submitHandler(value) {
        this._submitHandler = value;
    }

    get errorHandler() {
        return this._errorHandler;
    }

    set errorHandler(value) {
        this._errorHandler = value;
    }

    get form() {
        return this._form;
    }

    set form(value) {
        this._form = value;
    }

    _rules = null;
    _messages = null;
    _submitHandler = null;
    _errorHandler = null;
    constructor(form){
        this._form = form;
        this._form.addEventListener("submit", this.validate.bind(this));

        // this._rules = null;
        // this._messages = null;
        // this._submitHandler = null;
        // this._errorHandler = null;
    }

    init(settings) {
        rules = settings.rules;
        messages = settings.messages;
        submitHandler = settings.submitHandler;
        errorHandler = settings.errorHandler;
    }

    validate(event){
        event.preventDefault();
        let elements = form.elements;
        for (let elem of elements) {
            if (elem.dataset.validate) {
                let rulesValues = rules[elem.dataset.validate];
                for (let rule in rulesValues) {
                    if (!this[rule](elem.value, rulesValues[rule])){
                        errorHandler();
                        return;
                    }
                }
            }
        }
        console.log("Ok")
        submitHandler();
    }

    minLength(elemValue, ruleValue) {
        console.log("minLength", elemValue, ruleValue);
        return elemValue.length > ruleValue;
    }

    maxLength(elemValue, ruleValue) {
        console.log("maxLength", elemValue, ruleValue);
        return elemValue.length < ruleValue;
    }

    required(elemValue) {
        console.log("required", elemValue);
        return elemValue.length > 0;
    }

    reg_match(elemValue, ruleValue) {
        console.log("reg_match", elemValue, ruleValue);
        return ruleValue.test(elemValue);
    }

}

let form = document.forms.validate;

let validator = new Validator(form);

let rules = {
    login: {
        minLength: 4,
        maxLength: 22
    },
    password: {
        minLength: 8
    },
    for_require: {
        required: true
    },
    for_reg: {
        reg_match: /hello/
    }
};

let messages = {
    login: {
        minLength: "Сообщение о минимальной длине 4 символа"
    },
    for_require: {
        required: "Вам придется заполнить это поле"
    }
};

let submitHandler = (formData) => {
    console.log("Действие в случае успеха");
};
let errorHandler = (formData) => {
    console.log("Действие в случае провала");
};
validator.init({
    rules: rules,
    messages: messages,
    submitHandler: submitHandler,
    errorHandler: errorHandler
});

