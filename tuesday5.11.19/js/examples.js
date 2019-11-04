let currentSlide = 0;

function nextSlide(slider) {

    slider.children[currentSlide].classList.remove("active");
    currentSlide += 1;
    currentSlide = currentSlide < slider.children.length ? currentSlide : 0;
    // console.log(currentSlide);
    slider.children[currentSlide].classList.add("active");
}


function generateGoodsCards(data, parentElement) {
    for (let item in data){
        let card = document.createElement("div");
        card.classList.add("card");
        let title = document.createElement("h2");
        title.innerText = data[item]["title"];
        let img = document.createElement("img");
        img.setAttribute("src", "img/" + data[item]["img"]);
        let p = document.createElement("p");
        p.innerText = `Цена: ${data[item]["price"]}`;

        card.append(title);
        card.append(img);
        card.append(p);

        parentElement.append(card);
    }
}

export {nextSlide, generateGoodsCards};