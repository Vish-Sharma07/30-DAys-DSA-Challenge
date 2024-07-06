const marvel_heros = ["Thor", "Ironman", "Spidermn", "Captain America", "Widow"];
const dc_heros = ["Superman", "Flash", "Batman", "Joker", "Acquaman"];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros); // It adds arraysas arrays

// Concatenation

// const heros = marvel_heros.concat(dc_heros);
// console.log(heros);

// const all_new_heros = [...marvel_heros, ...dc_heros]; // Spread the elemnts in array
// console.log(all_new_heros);

// const another_arr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
// const real_array = another_arr.flat(Infinity);
// console.log(real_array);

// To convert any data type into array

// console.log(Array.from("Vishakha"));

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));