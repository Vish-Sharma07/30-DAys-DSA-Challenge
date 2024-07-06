// Dates

let myDate = new Date()
    // console.log(myDate);

// console.log(myDate.toString()); // to convert in String

// console.log(myDate.toISOString()); // Returns a date as string value in ISO Format
// console.log(myDate.toDateString()); // Returns a date as a string value
// console.log(myDate.toTimeString()); // returns a time as a string value
// console.log(myDate.toJSON()); // transforms an object's data to JSON serialization
// console.log(myDate.toLocaleString()); // Converts date-time to a current or specified locale
// console.log(myDate.toLocaleTimeString()); // Converts a time or string by using a current or specified localel

let myCreateDate = new Date(2024, 1, 24);
console.log(myCreateDate.toDateString());
console.log(myCreateDate.toLocaleString());