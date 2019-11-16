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

let moscow    = current.tz("America/New_York");
let losAngeles = moscow.clone().tz("America/Los_Angeles");
let london     = losAngeles.clone().tz("Europe/London");

console.log(moscow.format("LLL"), losAngeles.format("LLL"), london.format("LLL"));

// задача про самолет