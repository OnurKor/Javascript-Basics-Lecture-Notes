//* ======================================================
//*                   FOREACH METHOD
//* ======================================================

console.log("****** ITERATION **********");
//*Dizideki herbir fiyati konsola bastiriniz.

const fiyatlar = [100, 250, 50, 89];

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
const tlFiyatlar = [100, 150, 1000, 50, 80];

const dolarFiyatı = tlFiyatlar.map((tl) => (tl / dolar).toFixed(3));
console.log(dolarFiyatı);
const euroFiyatı = tlFiyatlar.map((tl) => (tl / euro).toFixed(3));
console.log(euroFiyatı);

//* ----------------  öRNEK  -----------------

const yeniDizi = isimler.map((isim, i, dizi) => {
  dizi[i] = isim.toLocaleLowerCase(); //! Orjinal diziyi değiştirdik
  return dizi[i];
});
console.log(yeniDizi);
console.log(isimler); //! Orjinal dizi değişti.

//* ======================================================
//*    CHAINING (PIPELINE) -- ZİNCİRLEME(BORU HATTI)
//* ======================================================
//! Tüm isimleri büyük harfe çevirip konsolda yazdiriniz.

isimler
  .map((isim) => isim.toLocaleUpperCase())
  .forEach((name) => console.log(name));

//* map() metodundan sonra eğer forEach gibi bir terminal(consumer) işlemi kullanılırsa yazılan ifade bir dizi döndürmemiş olur.(yani tüketir) ve forEach()'ten sonra yeni bir method gelmez.

//* ======================================================
//*                       FILTER METHOD
//* ======================================================

//! Ahmet olanları seçip büyük harfe çevirip konsolda yazdiriniz.
isimler
  .filter((x) => x === "ahmet")
  .map((x) => x.toLocaleUpperCase())
  .forEach((x) => console.log(x));
//! forEach() yaptığımız için değeri döndüyor.

const deneme = isimler
  .filter((x) => x === "ahmet")
  .map((x) => x.toLocaleUpperCase());
console.log(deneme); //! dizi döndürüyor.

//* fiyatlar array'inde fiyatı 250 TL den az olanlari ayri bir diziye saklayalim.

const kucuk250 = fiyatlar.filter((f) => f < 250);
console.log(kucuk250);

//*-------------- ÖDEV -------------------
//* fiyatlar dizisindeki fiyatı 90'dan büyük olan değerleri
//* konsola tek tek bastırınız.

fiyatlar.filter((buyuk) => buyuk > 90).forEach((x) => console.log(x));

//* fiyatlar dizisindeki fiyatı 110'dan küçük olan değerlere
//*  %10 artış yapın ve bu değerleri konsola tek tek bastırınız.

fiyatlar
  .filter((f) => f < 110)
  .map((a) => a * 1.1)
  .forEach((zamlı) => console.log(zamlı));

//* maaslar 4000'den düsük olanlara %50 zam yapmak istiyoruz
//* ve bunu ayri dizi olarak saklamak istiyoruz.
const maaslar = [3000, 5000, 4000, 6000, 6500];
console.log(maaslar);

const zam50 = maaslar
  .filter((kucuk4000) => kucuk4000 < 4000)
  .map((zam) => zam * 1.5);
console.log(zam50);

//* Maasi 4000 'den büyük olanlara %25 zam yaparak sonuçlari yazdiralim.
const zam25 = maaslar
  .filter((maas) => maas > 4000)
  .map((zam) => zam * 1.25)
  .forEach((zamlımaas) => console.log(zamlımaas));

//* maas toplamini forEach() ile bulunuz. 
let topMaas = 0;
maaslar.forEach((toplam) => topMaas += toplam);
console.log(topMaas);

//* ======================================================
//*                       REDUCE METHOD
//* ======================================================

//* maas toplamini reduce() ile bulunuz. 

const toplamMaas = maaslar.reduce((toplam, maas) => toplam + maas, 0);
console.log("Toplam Maas:", toplamMaas); //! toplama yaptıgımız için toplam parametresine ilk 0 değerini atadık bu nedenle ,0 yaptık.

//* maasi ortalamanin altinda olanlara %20 zam yapalim.
const ortMaas = (toplamMaas / maaslar.length);
console.log(ortMaas);

const zam20 = maaslar.filter((maas) => maas < ortMaas).map((zam) => zam * 1.2);
console.log(zam20);