//Date

var d = new Date();
console.log(d);
console.log(d.getDate(), d.getDay(), d.getMonth(), d.getFullYear());
console.log(d.toISOString());

var d1 = new Date(2018, 6, 5);
console.log(d1);
//calculating time diff between these two dates
var time = d - d1;
console.log(time);
//these are the times in millisc from 1st Jan 1970
console.log(d.getTime(), d1.getTime());

var dold = new Date(1970, 0, 1, 5, 30);
console.log(dold, dold.getTime());
