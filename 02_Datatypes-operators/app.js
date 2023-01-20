// let a;
// console.log(a);
// console.log(b);
// console.log('hello');

// console.log(a);
// var a = 3;
// var aa = 2;
// console.log(a);

// console.log(b);
// let b = 1;
// console.log(b);

// console.log(c);
// const c = 4;

// let c = "2";
// let d = 2;
// console.log(typeof c);
// console.log(typeof d);

// let e = +prompt("bir şey yazın"); //her zaman string döndürür, başına artı(+) koyarsak number döndürür.
// console.log(typeof e); 

// console.log(typeof null);

// let g = 3.15;
// let h = 1_000_000;
// console.log(typeof h);
// console.log(typeof g);

// let i = 999_999_999_999_999; 
// console.log(i);
// let j = 999_999_999_999_868_123;
// console.log(j);

// let k = +prompt("Bir sayı giriniz: ");
// console.log(typeof k, k);
// console.log(isNaN(k));

// let x;

// do {
//   x = prompt('Enter a Number :')
// } while (isNaN(x));

// console.log(x * x);


// console.log(15+25);   // 10'lu sayı sistemi
// console.log(015+025); // 8'li sayı sistemi
// console.log(018+025); // 8 yazıldıgı için decimal 10'lu sistem olarak düşünüyor. 18+21=39

// console.log(0.1+0.2); //!

// let l = 0.1 + 0.2;
// console.log(l);
// console.log(+l.toFixed(2)); // artı koymazsak string döndürür.
// toFixed() kaç hane alacağımızı belirliyoruz.

// let m = 'Hello World';
// let n = "Merhaba Dünya";
// console.log(typeof m, m);
// console.log(typeof n, n);

// let userName = "Onur";
// let p = `Merhaba ${userName}`;
// console.log(p, typeof p);


const myCar = {
  make : 'ford',
  model : 'Mustang',
  year : 1965,
  color : 'Black'
};

// console.log(myCar);

// myCar.color = "Red";
// console.log(myCar);

// myCar.sunRoof = true;
// console.log(myCar);

myCar.age = function(current) {
  console.log(current - this.year);
};

console.log(myCar);

myCar.age(2022);

delete myCar.sunRoof;
console.log(myCar);
