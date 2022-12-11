// console.log('**********\nSession 3 - Conditionals\n**********');
// ! if statement example
// check if the is positive

// const n1 = +prompt("Enter a number:");
// console.log(n1, typeof n1);3

// if(n1 > 0) {
//   console.log(`${n1} is positive`);
// } else console.log(`the number is either 0 or negative`);


// const n1 = +prompt("Enter a number:");
// console.log(n1, typeof n1);3

// if (n1 > 0) {
//   console.log(`${n1} is positive`);
// } else if (n1 < 0) {
//   console.log(`${n1} is negative`);
// } else {
//   console.log(`the number is 0`)
// };


// ! example 2 chest size

// https://www.perryellis.com/pages/size-chart

// suggest size for men as XS S M L XL XXL on chest size

// const chest = +prompt("Enter your chest size:");

// if (chest < 32) {
//   console.log("There is no size fit for you");
// } else if (chest < 35){
//   console.log("Your size: XS");
// } else if (chest < 38){
//   console.log("Your size: S");
// } else if (chest < 40){
//   console.log("Your size: M");
// } else if (chest < 44){
//   console.log("Your size: L");
// } else if (chest < 47){
//   console.log("Your size: XL");
// } else if (chest < 50){
//   console.log("Your size: XXL");
// } else{
//   console.log("There is no size fit for you");
// };



// ! example 2 three number comparison

// Write a JavaScript program that accept three integers and display the greatest.
// n1 is the greatest among n2 and n3
// 8 is the greatest among 3 and 5

// const n1 = +prompt("Enter a number:");
// const n2 = +prompt("Enter a number:");;
// const n3 = +prompt("Enter a number:");;

// if (n1 > n2 && n1 > n3) {
//   console.log(`${n1} is the greatest among ${n2} and ${n3}`);
// } else if (n2 > n3 && n2 > n1) {
//   console.log(`${n2} is the greatest among ${n1} and ${n3}`);
// } else if (n3 > n1 && n3 > n2) {
//   console.log(`${n3} is the greatest among ${n1} and ${n2}`);
// } else {
//   alert("Again enter a number because equal number" );
// };


// ! ternary examples 3
// console.log('----------\nternary if statements\n----------');

// program to check pass or fail
// let grade = prompt('Enter your score :');
// let result = grade >= 50 ? "pass" : "fail";
// console.log(`You ${result} the exam`)

// const age = 18;
// let result;
// if (age >= 18) {
//   result = 'You are eligible to vote.';
// } else {
//   result = 'You are not eligible to vote yet.';
// }
// console.log(result);

// const result =
//   age >= 18 ? 'You are eligible to vote.' : 'You are not eligible to vote yet';
// console.log(result);

// if (n1 > 0) {
//   console.log(`${n1} is positive`);
// } else if (n1 < 0) {
//   console.log(`${n1} is negative`);
// } else {
//   console.log(`the number is  0`);
// }

// ! evde denemeyiniz !!
// const n1 = 0;
// const result = n1 >= 0 ? (n1 == 0 ? 'zero' : `${n1} is positive`) : 'negative';
// console.log(result);
// ! evde denemeyiniz !! //? ternary operatörünü nested olarak kullanmak uygun değil.

// ! example-4 canDrive

// evaluate if a human can drive a car or not

// let canDrive = false;
// const hasDriversLicense = false;
// const hasGoodVision = false;

// const isHandicapped = false;
// const usingRegularCar = false;
// // // const usingDisabledCar = true;

// let canDrive = false;
// const hasDriversLicense = true;
// const hasGoodVision = true;
// const isHandicapped = false;
// const usingRegularCar = true;

// result =
//   hasDriversLicense && hasGoodVision
//     ? !isHandicapped
//       ? 'can drive'
//       : !usingRegularCar  
//       ? 'can drive'
//       : 'cannot drive'
//     : 'cannot drive';
// console.log(result);

// console.log('----------\nswitch case statements\n----------');

let text;
// let fruit = prompt('type your favorite fruit');
// banana, lime, limon, orange, apple, default

// switch (fruit.toLowerCase()) {
//   case 'banana':
//     text = 'I like Banana!🍌';
//     break;
//   case 'lime':
//   case 'lemon':
//   case 'orange':
//     text = `I am not a fan of ${fruit}`;
//     break;
//   case 'apple':
//     text = `I like 🍎🍏`;
//     break;

//   default:
//     text = "I don't know that fruit";
// }

// console.log(text);

// ! example-5  cw weekly program ❗your turn 🧑‍💻
// pazartesi salı çarşamba perşembe in class
// cuma team work
// cumartesi inclass + workshop
// pazar self study
// default yanlış gün girildi.


// ! example 5
// output day count of a month of given year 2020 02 => 29
// 2022 02 => 28

//? leap year


// ! example-6 path selection

/*
path = "ad", "fs", "ds" // ad => aws-devops , fs u know, ds => data-science
pathInfo = ""; // provide some information about the selected path.
*/

// const pathSelected = prompt(
//   'Which path would you like to attend?\nad -> aws-devops\nfs -> full-stack\nds -> data-science'
// );
