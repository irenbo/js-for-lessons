import {nextSlide, generateGoodsCards} from "./examples.js";

setInterval(nextSlide.bind(null, document.querySelector("#slider")), 4000);

let goods = {
    piano: {
        title: "Пианино",
        price: 3000,
        count: 25,
        img: 'piano.jpg'
    },
    guitar: {
        title: "Гитара",
        price: 1200,
        count: 40,
        img: 'guitar.jpg'
    },
    drum: {
        title: "Барабаны",
        price: 2700,
        count: 12,
        img: 'drum.jpg'
    },
    flute: {
        title: "Флейта",
        price: 900,
        count: 50,
        img: 'flute.jpg'
    }
};

generateGoodsCards(goods, document.querySelector(".goods"));