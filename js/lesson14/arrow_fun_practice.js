// practise arrow functions

// const greet = function () {
//     return 'hello, world';
// }

const greet = () => 'hello, world';
console.log(greet());


// const bill = function(products, tax){
//   let total = 0;
//   for(let i = 0; i < products.length; i++){
//     total += products[i] + products[i] * tax;
//   }
//   return total;
// }
const bill = (products, tax) =>{
  let total = 0;
  for(let i = 0; i < products.length; i++){
    total += products[i] + products[i] * tax;
  }
  return total;
}


console.log(bill([20,10,15], 0.75));


// const person = function(radius, circle, pi){
//     let area = 3.14 * radius ** 2;
// }

const person = radius => 3.14 * radius ** 2;
