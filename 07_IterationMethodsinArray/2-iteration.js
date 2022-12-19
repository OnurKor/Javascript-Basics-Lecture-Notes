//* ======================================================
//*                   FOREACH METHOD
//* ======================================================

console.log("****** ITERATION **********");
//*Dizideki herbir fiyati konsola bastiriniz.

const fiyatlar = [100, 200, 50, 89];

//*Dizideki herbir fiyati konsola bastiriniz.

fiyatlar.forEach(yazdir);

function yazdir(value) {
  console.log(value);
}

console.log("******************************");
//! Arraw function kullanılarak çözüm

fiyatlar.forEach((value) => console.log(value));

//** Fiyatlar dizisindekilerin toplamini konsola yazdiriniz */

let toplam = 0;
fiyatlar.forEach((fiyat) => (toplam += fiyat));
console.log("Toplam:", toplam);

//! NOT: forEach metodu void bir metottur.
//! (Yani herhangi bir değer döndürmez.)
console.log(fiyatlar.forEach((fiyat) => (toplam += fiyat))); //! undefined

//*-------------- ÖRNEK -------------------
//! forEach 3 parametre alır, bunun için bir örnek.

let toplam1 = 0;

fiyatlar.forEach((deger, indis, dizi) => {
  toplam1 += deger;
  console.log(`${indis}.iterasyon toplamı: ${toplam1}`);
  dizi[indis] = deger + 10;
});
console.log(fiyatlar);

//*-------------- ÖDEV -------------------
//* fiyatlar dizisinde her bir fiyata %10 zam yapalım.

//* ======================================================
//*                       MAP METHOD
//* ======================================================

//*-------------- ÖRNEK -------------------
//* isimler dizisin içerisindeki her ismi büyük harf olarak
//* yeni bir diziye saklayalım.

const isimler = [
  "Ahmet",
  "mehmet",
  "ismet",
  "SAFFET",
  "Can",
  "Canan",
  "Cavidan",
];

console.log(isimler.map((isim) => isim.toLocaleUpperCase()));

const kucukIsimler = isimler.map((isim) => isim.toLocaleLowerCase());
console.log(kucukIsimler);

console.log(isimler); //! Orjinalini değiştirmez.


//* tlFiyatlar dizisindeki fiyatların dolar ve euro karşılığını yeni dizi olarak yazdırınız.
const euro = 19.68;
const dolar = 18.1;
const tlFiyatlar = [100,150,1000,50,80];

const dolarFiyatı = tlFiyatlar.map((tl) => (tl / dolar).toFixed(3));
console.log(dolarFiyatı);
const euroFiyatı = tlFiyatlar.map((tl) => (tl / euro).toFixed(3));
console.log(euroFiyatı);


//* ----------------  öRNEK  ----------------- 

const yeniDizi = isimler.map((isim, i, dizi) => {
    dizi[i] = isim.toLocaleLowerCase();  //! Orjinal diziyi değiştirdik
    return dizi[i];
});
console.log(yeniDizi);


//* ======================================================
//*    CHAINING (PIPELINE) -- ZİNCİRLEME(BORU HATTI)
//* ======================================================
//! Tüm isimleri büyük harfe çevirip konsolda yazdiriniz.

//* map() metodundan sonra eğer forEach gibi bir terminal(consumer) işlemi
//* kullanılırsa yazılan ifade bir dizi döndürmemiş olur.



//* ======================================================
//*                       FILTER METHOD
//* ======================================================

//! Ahmet olanları seçip büyük harfe çevirip konsolda yazdiriniz.

//* fiyatlar array'inde fiyatı 250 TL den az olanlari ayri bir diziye saklayalim.

//*-------------- ÖDEV -------------------
//* fiyatlar dizisindeki fiyatı 90'dan büyük olan değerleri
//* konsola tek tek bastırınız.

//* fiyatlar dizisindeki fiyatı 110'dan küçük olan değerlere
//*  %10 artış yapın ve bu değerleri konsola tek tek bastırınız.

//* maaslar 4000'den düsük olanlara %50 zam yapmak istiyoruz
//* ve bunu ayri dizi olarak saklamak istiyoruz.

//* Maasi 4000 'den büyük olanlara %25 zam yaparak sonuçlari yazdiralim.

//* ======================================================
//*                       REDUCE METHOD
//* ======================================================

//* maas toplamini bulunuz.

//* maasi ortalamanin altinda olanlara %20 zam yapalim.
