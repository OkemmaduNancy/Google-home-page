
const lastChar = (str) => str.split('').reverse().join(',').replace(',', '')[str.length === str.length + 1 ? 1 : 0];


// example
console.log(lastChar("Nancy@gmail.com"));

const str = "linto.yahoo.com."
console.log(str.charAt(str.length-1))