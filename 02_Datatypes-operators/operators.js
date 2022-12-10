// let  x = "Hello ";
// let y = "World";
// console.log(x+y);

// let z = 3;
// console.log(x +z);

// let a = 10;

// // console.log(a++);
// // console.log({a});
// // console.log('a = ',a);

// let b = 8;

// console.log(b = a++)
// console.log({a},{b})

/* let x = 5, y = "5";
// console.log(x = y); // atama operatörü string 5 olarak atandı.
// console.log(x == y); //true
// console.log(x === y); //false

let z = x != y;

let zz = x !== y;
console.log(z);
console.log(zz);
console.log(!false); */

//! Logical Operators

// and -- &&
// or -- ||
// Not -- !

// ----------------------------------

/* console.log(Boolean(null)); //false
console.log(null == false); // false
console.log(null == true); // false
console.log(null == null); // true

console.log(NaN == NaN) // false

let a,b;
console.log(a == b); // true */

//! Nullish(??)

let d;
let e = "Hello World";
console.log(d ?? e);
console.log(e ?? d);

let f = null;
console.log(f ?? d);
console.log(d ?? 0);