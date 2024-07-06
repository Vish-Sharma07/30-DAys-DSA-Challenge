const myArr = [1, 3, 6, 5, 7];

const myHeros = ["Shaktiman", "Chota Bheem"];
const myArr2 = new Array(1, 2, 3, 4, 5);
console.log(myArr[1]);

// Array Methods
myArr.push(6); // to insert an element
console.log(myArr);

console.log(myArr.unshift(9));
console.log(myArr.shift());
console.log(myArr.includes(9));
console.log(myArr.indexOf(9));

//slice or splice

// In slice, it returns the new array after slicing while in splice, it changes to the original array

console.log("A", myArr);

const mn1 = myArr.slice(1, 3);
console.log(mn1);

const mn12 = myArr.splice(1, 3); // splice manipulates the original array while slice does not
console.log(mn12);