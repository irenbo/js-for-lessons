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


export {generateImage, move};

