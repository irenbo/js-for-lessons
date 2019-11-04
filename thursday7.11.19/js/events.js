let titleElems = document.querySelectorAll('.article p:first-child');


for (let elem of titleElems){
    elem.addEventListener('click', openDescription);
}

function openDescription() {
    console.log("элемент, на который повешен обработчик события", this);
    console.log("его соседний элемент справа: ", this.nextElementSibling);
    // если класса open у элемента нет, добавляем, в противном случае удаляем
    this.nextElementSibling.classList.toggle("open");
}


function getPresents() {
    return {
        car: "Машина",
        dog: "Собака",
        book: "Книга"
    }
}

let presentContainer = document.getElementById("present_container");

presentContainer.addEventListener("click", showPresent);

function showPresent(event) {
    console.log("информация о событии:", event);

    // элемент, на котором сработал click
    let clickElem = event.target;
    console.log("элемент, на котором сработал click", clickElem);

    // значение атрибута data для элемента,
    // на котором сработал click
    let present = clickElem.dataset.present;
    if (present) {
        let presents = getPresents();
        clickElem.innerText = presents[present];
        clickElem.classList.add("present");
        // удалить обработчик события
        this.removeEventListener("click", showPresent);
    }

}



window.addEventListener("scroll", fixedMenu);

let fixedBlock = document.getElementById("fixed");
let fixedBlockOffset = fixedBlock.offsetTop;
console.log(fixedBlockOffset);

function fixedMenu() {
    console.log(window.pageYOffset);
    if (window.pageYOffset > fixedBlockOffset) {
        fixedBlock.classList.add("fixed");
    } else {
        fixedBlock.classList.remove("fixed");
    }
}
