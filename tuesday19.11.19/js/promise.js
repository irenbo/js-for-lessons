// Promise (по англ. promise, будем называть такой объект «промис»)
// – это специальный объект в JavaScript,
// который связывает «создающий» и «потребляющий» коды вместе.

// у промиса есть 3 состояния:
// Промис в состоянии ожидания (pending)
// Промис решен (resolved)
// Промис отклонен (rejected)

// В типичном веб-приложении может выполняться множество асинхронных операций,
// таких как загрузка изображений, получение данных из JSON, обращение к API и других.

let promise = new Promise(function(resolve, reject) {
    // Делаем, что-то, возможно асинхронное, тогда…
    if (true/* Всё прошло отлично */) {
        resolve('Сработало!');
    }
    else {
        reject(Error('Сломалось'));
    }
});

const loadImage = url => {
    return new Promise(function(resolve, reject) {
        // Открываем новый XHR
        let request = new XMLHttpRequest();
        request.open('GET', url);
        // После загрузки запроса
        // проверяем, был ли он успешным
        request.onload = function() {
            if (request.status === 200) {
                // Если успешный, то резолвим промис
                // setTimeout(function (){},5000)
                console.log(request.response);
                resolve(request.response);
            } else {
                // Если нет, то реджектим промис
                reject(Error('Произошла ошибка. Код ошибки:' + request.statusText));
            }
        };
        request.send();
    });
};

// const embedImage = url => {
loadImage("https://baconipsum.com/api/?type=meat-and-filler")
    .then(
    (result) => {
        let p = document.createElement("p");
        p.innerText = JSON.parse(result);
        document.querySelector('body').appendChild(p);
        },
    (err) => {
        console.log(err);
    });
// }

console.log("sdsds");
// embedImage("https://picsum.photos/200");