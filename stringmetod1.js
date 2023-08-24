//let result
let txt = "How are you guys?"
let result = txt.length;
console.log(result);

//slice
result = txt.slice(5,9);
result = txt.slice(6);
result = txt.slice(-15,-9);
console.log(result);

//substr
result = txt.substr(5,9);
result = txt.substr(-15,3);

//substring
result = txt.substring(-5,9);
result = txt.substring(9);

//toUpperCase
result = txt.toUpperCase();

//toLowerCase
result = txt.toLowerCase();

//concat
let a = "Hello";
let b = "World";
result = a.concat(" ",b);
console.log(result);
