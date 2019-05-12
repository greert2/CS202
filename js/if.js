// if statements

/* if(condition) {
    //run your statement   
}*/

// let age = 25;
// if(age > 20) {
//     console.log("Your age is incorrect");
// }

let password = 'password1234';

// if(password.length > 8) {
//     console.log("Your password is incorrect");
// }

if(password.includes('@')) {
    console.log("Your password is correct!");
}else if(password.length < 8){
    console.log("Your password is not strong enough");
}else{
    console.log("Your password is incorrect!");
}