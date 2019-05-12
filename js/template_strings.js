// template strings
let author = "Justice";
let books = 'Blog website';
let likes = "30";

// concatenation way
// let result = author + ' is the author of ' + books + ' and it has ' + likes + ' likes.';

// console.log(result);


// template string way
let result = `${author} is the author of ${books} and it has ${likes} likes.`;
console.log(result);


// creating html templates
let html = `
<h2>${author}</h2>
<p>is the author of ${books} and it has </p>
<p>${likes} likes.</p>
`;
console.log(html);
document.write(html);