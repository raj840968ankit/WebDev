//array part 1

//array must always be written in [].............
const myArr = [1,2,3,4,5];

//array can have dissimilar data types
const myArr2 = [1,2,"shaktimaan"] 

//another method for creating array
const myArr3 = new Array(myArr);  //myArr will consider as single array in myArr3 as myArr3[0]

console.log(myArr);
console.log(myArr3);
myArr3[0] = 9;
console.log(myArr3);

//.................Array methods............................

console.log("length = "+myArr.length);  //return length of myArr

myArr.push(9);    //add to the last
console.log(myArr);

myArr.pop()       //remove element from the last
console.log(myArr);

myArr.unshift(9)  //add element to first
console.log(myArr);

myArr.shift()  //remove element from first
console.log(myArr);

console.log(myArr.includes(4))   //check value present or not

console.log(myArr.indexOf(4))    //return index or -1 if not exist

const newArr = myArr.join();     //coverts array to string
console.log(newArr);
console.log(typeof(newArr));

console.log(Array.from("ankit"));    //converts string to array

const arr1 = myArr.slice(1,3);   //returns a subArray and doesn't modifies array
console.log(arr1);
console.log(myArr);

const arr2 = myArr.splice(1,3);   //returns a subArray and modifies the array
console.log(arr2);
console.log(myArr);




