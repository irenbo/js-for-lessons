// доступ к форме по значению атрибута name
let form = document.forms.lesson;
console.log(form);

// получение элементов формы по значению атрибута name
let login = form.elements.login;
console.log(login);

// получение и установка значений
console.log(login.value);
login.value = "qwe";

// получим радиокнопку с name = color
let colorRadio = form.elements.color;
console.log(colorRadio);

// получим значение радиокнопки с name = color
let checkedValue = colorRadio.value;
console.log(checkedValue);

// меняем цвет fieldset
for (let radio of colorRadio){
    radio.addEventListener("focus", changeColor);
}


function changeColor() {
    form.elements.checkbox_fieldset.style.background = this.value;
}

// при выборе "Отметьте, если указать другую информацию" сделать input активным
// disable = true
// disable = false


function getCheckedCheckBoxes(name) {
    let checkBoxes = document.getElementsByName(name);
    // массив для выбранных чекбоксов
    let checkBoxChecked = [];

    for (let cb of checkBoxes){
        if (cb.checked) {
            checkBoxChecked.push(cb.value);
            console.log("значение чекбокса:", cb.value);
        }
    }
    return checkBoxChecked;
}
let langArr = getCheckedCheckBoxes('lang[]');
console.log(langArr);

let checkBox1 = form.elements['lang[]'];
console.log(checkBox1);


// выпадающий список
let countries = form.elements.countries;

for (let country of countries){
    if (country.selected) {
        console.log("selected country",country.value);
    }
}


// submit - событие формы - отправка по-умолчанию
form.addEventListener('submit', takeForm);

function takeForm(event) {
    event.preventDefault();// отмена события по умолчанию
    console.log(this); // form
    let formData = new FormData(this);
    console.log(formData);
    console.log(formData.getAll("lang[]"));
    console.log(formData.get("login"));
}


// blur and focus
login.addEventListener('focus', focusOnElem);
function focusOnElem() {
    console.log("focus on", this);
    console.log("focus on", login);
}

login.addEventListener('blur', focusOut);
function focusOut() {
    console.log("login value =", this.value);
}

// фокус уходит с login - проверка login
// фокус уходит с password - проверка password
// рамка красная, если все плохо, зеленая - хорошо

// форма и проверки
