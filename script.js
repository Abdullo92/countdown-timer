const daysEl = document.querySelector('#days');
const hoursEl = document.querySelector('#hours');
const minutesEl = document.querySelector('#mins');
const secondsEl = document.querySelector('#seconds');

const startDay = '23 March 2023';

function countDown() {
    const futureDate = new Date(startDay);
    const currentDate = new Date();

    const totaly = (futureDate - currentDate)/ 1000;
    
    const days = Math.floor(totaly / 86400);
    //============= But we can write  either like down code or up ==================<
    // const days = Math.floor(totaly / 3600 / 24);
    const hours = Math.floor(totaly / 3600) % 24;
    const minutes = Math.floor(totaly / 60) % 60;
    const seconds = Math.floor(totaly) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);
}
//------------ this func is for format --> minu 01 --> seco 01 not only --> 1-------------------<
function formatTime(time) {
    return time < 10 ? `0${time}` : `${time}`; 
}

countDown();
setInterval(countDown, 1000);

// get total seconds between the times
// var delta = Math.abs(date_future - date_now) / 1000;

// // calculate (and subtract) whole days
// var days = Math.floor(delta / 86400);
// delta -= days * 86400;

// // calculate (and subtract) whole hours
// var hours = Math.floor(delta / 3600) % 24;
// delta -= hours * 3600;

// // calculate (and subtract) whole minutes
// var minutes = Math.floor(delta / 60) % 60;
// delta -= minutes * 60;

// // what's left is seconds
// var seconds = delta % 60;  



// Heres in javascript For example, the future date is New Year s Day

// DEMO updates every second

// var dateFuture = new Date(new Date().getFullYear() +1, 0, 1);
// var dateNow = new Date();

// var seconds = Math.floor((dateFuture - (dateNow))/1000);
// var minutes = Math.floor(seconds/60);
// var hours = Math.floor(minutes/60);
// var days = Math.floor(hours/24);

// hours = hours-(days*24);
// minutes = minutes-(days*24*60)-(hours*60);
// seconds = seconds-(days*24*60*60)-(hours*60*60)-(minutes*60);




// var d = Math.abs(date_future - date_now) / 1000;    // delta
// var r = {};                                         // result
// var s = {                                          // structure
//     year: 31536000,
//     month: 2592000,
//     week: 604800, // uncomment row to ignore
//     day: 86400,   // feel free to add your own row
//     hour: 3600,
//     minute: 60,
//     second: 1
// };

// Object.keys(s).forEach(function(key){
//     r[key] = Math.floor(d / s[key]);
//     d -= r[key] * s[key];
// });

// // for example: {year:0,month:0,week:1,day:2,hour:34,minute:56,second:7}
// console.log(r);
