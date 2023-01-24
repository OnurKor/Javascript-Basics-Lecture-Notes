console.log("****** LOOPS *******");

// * =======================================================
// *                     DÖNGÜLER
// * =======================================================


//************************ FOR ****************************
// Math.floor() =>aşağıya yuvarlar
// Math.ceil() =>sürekli yukarıya yuvarlar
// Math.round() => değerine göre yuvarlar.
// Math.trunc() => kesirli sayının tam kısmı alır.

/* for (let i = 1; i <= 10; i++) {
    const randomNumber = Math.floor(Math.random() * 100 + 1);
    console.log(randomNumber);
    
};
console.log("Program bitti"); */

//? Ornek: 1 den n kadar sayıları toplayan kodu yazınız.


/* const n = +prompt("n sayısını giriniz:");
let toplam = 0;

for(let i = 1; i <= n; i++){
    
    toplam += i;
}


console.log("Toplam:", toplam); */

// //? ÖRNEK: Dışarıdan girilen sayının Asal olup olmadığını tespit ederek sonucu yazdıran programı yazınız.

// const number = +prompt("Enter a positive number: ");
// let isPrime = true;

// // check if number is equal to 1
// if (number === 1) {
//     console.log("1 is neither prime nor composite number.");
// }

// // check if number is greater than 1
// else if (number > 1) {

//     // looping through 2 to number-1
//     for (let i = 2; i < number; i++) {
//         if (number % i == 0) {
//             isPrime = false;
//             break;
//         }
//     }

//     if (isPrime) {
//         console.log(`${number} is a prime number`);
//     } else {
//         console.log(`${number} is a not prime number`);
//     }
// }
// // check if number is less than 1
// else {
//     console.log("The number is not a prime number.");
// };

// //******************** WHILE ******************

// let i = 1;
// while (i <= 5) {
//     console.log(`${i}-Merhaba`);
//     i++;
// }
// console.log("Bitti")

// //* Ornek
// let not = +prompt("Lütfen notunuzu giriniz (0-100):");

// while (not < 0 || not > 100) {
//   console.log("Girdiğiniz not 0-100 arasında olmalıdır.");
//   not = +prompt("Lütfen notunuzu giriniz (0-100):");
// }
// console.log("Girdiğiniz not:", not);

// //******************** DO-WHILE ******************
/* let sayac = 1;

do {
  console.log('Merhaba-', sayac);
  sayac++;
} while (sayac <= 5); */

// let not2;

// do {
//   not2 = +prompt("Lütfen notunuzu giriniz (0-100):");
//   if (not2 < 0 || not2 > 100) {
//     alert("Girdiğiniz not 0-100 arasında olmalıdır");
//   }
// } while (not2 < 0 || not2 > 100);

// console.log("Girdiğiniz not", not2);

// //? ODEV1: klavyeden Q karakteri girilene kadar not girişi yapan bir programı döngü kullanarak yazınız.

// let not3;

// while (not3 != "q") {
//   not3 = prompt("Lütfen not giriniz veya Q ya basarak çıkınız!").toLowerCase();
//   if (not3 < 0 || not3 > 100) {
//     console.log("Girdiğiniz not 0-100 arasında olmalıdır");
//   } else {
//     console.log("Girdiğiniz not", not3);
//   }
// }

// console.log("Q ya basarak çıkış yaptınız !!!");

let not3;

do {
  not3 = prompt("Lütfen not giriniz veya Q ya basarak çıkınız!").toLowerCase();
  if (not3 < 0 || not3 > 100) {
    console.log("Girdiğiniz not 0-100 arasında olmalıdır");
  } else {
    console.log("Girdiğiniz not", not3);
  }
} while (not3 != "q");

console.log("Q ya basarak çıkış yaptınız !!!");
