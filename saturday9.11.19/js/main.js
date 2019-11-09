// import {generateImage, move} from "./canvas.js";

let form = document.forms.mini;
let cb = form.elements.cb;
cb.addEventListener("change", openInp);

function openInp(){
    let inp = form.elements.text;
    inp.disabled = !this.checked;
    inp.value = "";
}


let canvas = document.getElementsByTagName('canvas')[0];
canvas.width = 900;
canvas.height = 600;


let ctx = canvas.getContext('2d');
ctx.fillStyle = "green";
ctx.fillRect(0, 0, 900, 600);
ctx.strokeRect(0, 0, 900, 600);

function generateImage(obj) {
    let img = new Image();
    img.src = obj.img;
    img.onload = () => {
        ctx.drawImage(img, obj.x, obj.y);
    }
}

function clearImage(obj){
    ctx.fillRect(obj.x-2, obj.y, obj.width, obj.height);
}


function move(obj, event){
    //w - вверх KeyW
    //a - влево KeyA
    //d - вправо KeyD
    //s - вниз KeyS
    console.log(event.code);

    if (event.code === "KeyW") {
        console.log("Движение вверх");
        obj.y -= 2;
        generateImage(obj);
        clearImage(obj);
    } else if (event.code === "KeyA") {
        console.log("Движение влево");
        obj.x -= 2;
        generateImage(obj);
        clearImage(obj);
    } else if (event.code === "KeyD") {
        console.log("Движение вправо");
        obj.x += 2;
        generateImage(obj);
        clearImage(obj);
    } else if (event.code === "KeyS") {
        console.log("Движение вниз");
        obj.y += 2;
        generateImage(obj);
        clearImage(obj);
    }
}


let tiger = {
    img: 'img/tiger.png',//https://picsum.photos/id/237/200/300',//'img/tiger.png',
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