let date = moment('2019-01-01');
let current = moment();
let dateTime = moment('2019-01-01 16:30');
console.log(date.format("YYYY MMMM dd"), current, dateTime.format("YYYY MMMM dddd - HH:mm"));

dateTime.add(1, 'day');
console.log(dateTime.format('LLL'));
dateTime.add(10, 'hours');
console.log(dateTime.format('LLL'));
dateTime.add(3, 'year');
console.log(dateTime.format('LL'));

// from str
let parse = moment('01/12/2016', 'DD/MM/YYYY', true);
console.log(parse.format('LL'));

let moscow    = current.tz("Europe/Moscow");
let losAngeles = moscow.clone().tz("America/Los_Angeles");
let london     = losAngeles.clone().tz("Europe/London");

console.log(moscow.format("YYYY MMMM dddd - HH:mm"), losAngeles.format("YYYY MMMM dddd - HH:mm"), london.format("YYYY MMMM dddd - HH:mm"));

// задача про самолет
// самолет - москва - нью-йорк
// время в полете 10 часов
// отправление 13:30
// во сколько он приземлится в нью-йорке по местному времени