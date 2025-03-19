//****************** Dates ********************
let myDate = new Date()
console.log(myDate)               //non-readable format
console.log(myDate.toString())    //readable format
console.log(myDate.toDateString());    //day mon date year
console.log(myDate.toLocaleString());  //date/mon/year, time
console.log(typeof(myDate));


let setDate = new Date(2025, 0, 28, 5, 30)  //set Number date via constructor (year, mon(0-based indexing), date, hour, min)
console.log(setDate.toDateString());
let setDate2 = new Date("2025-01-28")   //set String date via constructor("year-mon(1-based indexing)-date")
console.log(setDate2.toLocaleString());

//********* TimeStamp ***************
let myTimeStamp = Date.now()   //will give in milliseconds from 1/jan/1970
console.log(myTimeStamp);
console.log(setDate2.getTime());  //to fetch time from date
console.log(Math.floor(Date.now()/1000));  //time in seconds

//********some Individual methods ************
console.log(myDate.getDate());
console.log(myDate.getMonth() + 1);
console.log(myDate.getFullYear());
console.log(myDate.getTime());
console.log(myDate.getHours());
console.log(myDate.getMinutes());
console.log(myDate.getSeconds());
console.log(myDate.getMilliseconds());

//customize date types
// let customDate = myDate.toLocaleString('default', {
//     day : "long",
//     getFullYear : "long"
// })


