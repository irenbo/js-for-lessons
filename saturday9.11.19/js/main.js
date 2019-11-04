import {generateImage, move} from "./canvas.js";

let tiger = {
    img: 'img/tiger.png',
    x: 22,
    y: 15,
    height: 128,
    width: 128
};

generateImage(tiger);
document.addEventListener('keydown', move.bind(document, tiger));

// содать 3х кроликов
// обработать поимку кролика тигром:
// когда кролик пойман, он исчезает, тигр получает очки