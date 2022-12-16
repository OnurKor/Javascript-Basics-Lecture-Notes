// ?=========================================================
// ?                DİZİLER (ARRAYS)
// ?=========================================================

console.log("***** ARRAYS ******");

//* Dizi Tanımlama
//* ---------------------------------------------------------

// ! 1.Yöntem (Array Literal) - Tercih edilen yöntem
const isimler = ["ahmet", "mehmet", "ismet", "saffet"];
// console.log(isimler);
// console.log(isimler.length); //? 4

// ! 2.Yöntem (Object Constructor)
const diller = new Array("Python", "Java", "C++", "JS", "Go");
// console.log(diller);

const numbers = new Array(3, 2, 1);
// console.log(numbers)

const sayilar = new Array(10); //! 10 elemanlık boş bir array oluşturdu
// console.log(sayilar);

//* Diziden Veri Okuma-Yazma
//* ---------------------------------------------------------

//!Okuma
const java = diller[1];
// console.log(java);

//!Diziye Yazma
isimler[2] = "Canan";
// console.log(isimler);

//! Hata,const keyword'u ile tanımlanmış bir diziye tamamıyla bir atama yapılmaz.

// isimler = ['Can', 'Canan', 'Cavidan'];
// console.log(isimler);
//!Uncaught TypeError: Assignment to constant variable.

const yaslar = [22, 18, 15];
const kisiler = ["Ahmet", "Yilmaz", 2022, 2022 - 1970, true, 5.6, yaslar];
// console.log(kisiler);
// console.log(kisiler[6][1]);

kisiler[6][2]++;
// console.log(kisiler);

const sonYas = kisiler[6][2]++;
// console.log(sonYas, kisiler);

//? ===========================================================
//?  DİZİYİ DEĞİŞTİREN (MUTATOR) METOTLAR
//? ===========================================================

const cars = ["BMW", "Porsche", "Mercedes", "Fiat"];

//* pop() son elemanı siler ve sildiği elemanı döndürüyor.
const deleted = cars.pop();
console.log(cars, "Silinen:", deleted);

//* push() dizinin sonuna eleman ekler ve dizinin son eleman sayisini dondurur.
const added = cars.push("Volvo");
console.log(cars, "Ne döndürdü:", added);

//* unshift() dizinin 0. indeksine eleman ekler ve dizinin son eleman sayisini dondurur.
const boyut = cars.unshift("Audi");
console.log(cars, boyut);

//* shift() dizinin 0. indeks elemanini siler ve silenen elemani dondurur.
const silinen = cars.shift();
console.log(silinen, cars);

//* reverse() Dizinin tamamini ters sıraya cevirdi.
console.log(cars.reverse());

console.log(cars); //! mutator yani değişten metotlar oldugu için diziyi değiştirip son halini döndürür.

//* sort() Diziyi alfabetik olarak siralar.
console.log(cars.sort());

const rakamlar = [3, 5, 1, 10, 55];
console.log(rakamlar.sort()); //! Alfabetik sıraladığı için doğru sonuç çıkmayabilir.

//* sort metodu diziyi iterasyona uğratır ve parametre olark aldığı arrow fonksiyonunu dizinin her bir elemanına uygular. Bu sayade küçük sayılar ile büyük sayıları yer değişirerek sıralama işlemini gerçekleştirir.

const dogruSıralama = rakamlar.sort((a, b) => a - b);
console.log(dogruSıralama);

cars.splice(1, 0, "Vosvos");
console.log(cars); //! 1. indise Vosvos ekle (eleman sayısı bir artar)

cars.splice(2, 1, "Anadol");
console.log(cars); //! 2. indistekini Anadol olarak değiştir (eleman sayısı değişmez.)

//? ===========================================================
//?  DİZİ ERİŞİM METOTLARI
//? ===========================================================
console.log("DİZİ ERİŞİM METOTLARI");
const sayilar1 = [3, 5, 2, '2', 'üc', 2, 'bes', 5];

//* includes()
//*-----------------------------------------------------------
console.log(sayilar1.includes('5')); //false
console.log(sayilar1.includes(5)); //true

//* indexOf(),  lastIndexOf();
//*-----------------------------------------------------------

//* ilk eslesen indeksi dondurur.
const ikiIndeks = sayilar1.indexOf(2);
console.log("2'nin son indeksi:", sayilar1.lastIndexOf(2)); //5
console.log("2'nin son ilk indeksi:", ikiIndeks); //2

//* Ornek
//*-----------------------------------------------------------
const arananString = prompt('Aranan sayiyi girinz:');
const arananNumber = Number(arananString);

let bulunduMu = false;
if (sayilar1.includes(arananString)) {
  console.log("Arananın String'in indeksi:", sayilar1.indexOf(arananString));
  bulunduMu = true;
}
if (sayilar1.includes(arananNumber)) {
  console.log('Arananın Sayinin indeksi:', sayilar1.indexOf(arananNumber));
  bulunduMu = true;
}

if (!bulunduMu) {
  console.log('Aranan bulunamamıştır');
}

//* join()
//*-----------------------------------------------------------
//? join, dizinin elamanlari birlestirip string hale cevirir.

// const sayilar1 = [3, 5, 2, "2", "üc", 2, "bes", 5];

const stringSayilar1 = sayilar1.join(',');
console.log(stringSayilar1);

//* toString()
//*-----------------------------------------------------------
//? toString fonksiyonu sadece dizinin elemanlarinin aralarina
//? (virgul) koyarak birlestirir ve string yapar.

const stringSayilar2 = sayilar1.toString();
console.log(stringSayilar2);

//* slice()
//*-----------------------------------------------------------

const arabalar = ['bmw', 'mercedes', 'audi', 'ferrari', 'anadol'];
const sliced1 = arabalar.slice(2);
console.log(sliced1);

const sliced2 = arabalar.slice(1, 3); // start: inclusive, stop :exclusive
console.log(sliced2);

//* concat()
//*-----------------------------------------------------------
const yazilar = ['a', 'b', 'ad', 'soyad', 'yas'];
const numbersArray = [3, 5, 1, 4, 7];
const birlesik = yazilar.concat(
  true,
  numbersArray,
  false,
  ['a', 'b', 'c'],
  [['x', 'y', 'z']] //nested
);
console.log(birlesik);