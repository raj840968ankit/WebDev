//........for() loop...............
for(let i = 1; i <= 2; i++){
    //console.log(i);
}
 

//..........while loop.............
let i = 1
while(i <= 2){
    //console.log(i)
    i++;
}


//..........do-while loop.............
do{
    //console.log(i);
    i++;
}while(i < 1);


//...................................for of loop (directly work on values).........................................
// Syntax -> for (const element of object) | here objects can be string, array, map, object
const str = "ankit"
for (const ch of str) {
    //console.log(ch);
}


//....Map data structure in js    
const mp = new Map()
mp.set("1","one")
mp.set("2","two")
//console.log(mp);
for (const key of mp.keys()) {
    //console.log(`${key} -> ${mp.get(key)}`);
}

const obj = {
    "1": "one", 
    "2":"two"
}
for (const key of Object.keys(obj)) {
    //console.log(`${key} -> ${obj[key]}`);
}


//...................................for of loop (directly work on keys).........................................
for (const key in obj) {
    //console.log(`${key} -> ${obj[key]}`);
}


//...................................forEach loop(it doesn't returns anything) .........................................
//Syntax -> array.forEach(callback function) 
const arr = ["hulk", "ironman", "captainAmerica"]
arr.forEach( (item) => {
    //console.log(item);
})

arr.forEach( (item, index, array) => {     //we can fetch value, index, wholeArray
    console.log(item, index, array);
})

//array of object = [{}, {}, {}]
const arr2 = [
    {
        langaugeName : "JavaScript",
        languageFileType : "js"
    },
    {
        langaugeName : "Java",
        languageFileType : "java"
    },
    {
        langaugeName : "Python",
        languageFileType : "py"
    }
]
arr2.forEach( (item) => {
    console.log(item.langaugeName);
} )