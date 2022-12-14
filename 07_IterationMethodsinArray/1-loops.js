//* =====================================================
//*                     FOR LOOP
//* ======================================================

console.log("******* LOOPS IN ARRAYS ******");

/* const rakamlar = [-5, 15, 22, -4, 45, 78, -25];

let toplam = 0;
for(i = 0; i< rakamlar.length; i++){
    toplam += rakamlar[i];
};
console.log(toplam); */

const islemler = [-3000, 4500, -2200, -6000, 9000];

const islemlerToplami = () => {
  let yatirma = 0;
  let cekme = 0;
  for (let i = 0; i < islemler.length; i++) {
    if (islemler[i] >= 0) {
      yatirma += islemler[i];
    } else {
      cekme += islemler[i];
    }
  }
  return `Toplam Yatırma: ${yatirma}, Toplam Çekme: ${-cekme}`;
};

console.log(islemlerToplami());

//* ======================================================
//*                   FOR-IN LOOP
//* ======================================================

/* const sayilar = [-5, 15, 22, -4, 45, 78, -25];

let sonuc = 0;
for(let i in sayilar){
    sonuc += sayilar[i];
}
console.log(sonuc); */

//*-------------------------------------------------------
//* SORU: Ogrenciler dizisinde ogrenci isimleri saklanmaktadir.
//* ogrncileri aramamızı sağlayacak ve aranılan ogrenciden
//* ne kadar sayida bulunuldugunu  ana programa döndürecek bir
//*  fonksiyonu yazınız. Eğer aranılan isimde bir ogrenci yok ise
//* fonksiyon aranılan ogrenci bulunamdı dondurulmelidir.
//*--------------------------------------------------------
const ogrenciler = [
  "ahmet",
  "mehmet",
  "ismet",
  "saffet",
  "ahmet",
  "nur",
  "can",
  "nur",
  "mehmet",
  "cem",
];

/* const ogrenciBul = function (isim) {
  let sayac = 0;
  for (let i in ogrenciler) {
    if (ogrenciler[i] === isim) {
      sayac++;
    }
  }

  if (sayac === 0) {
    return `${isim} bulunamadı`;
  } else {
    return `${isim}, ${sayac} adet bulundu`;
  }
};

let ogrIsim = prompt("Öğrenci adını giriniz:").toLocaleLowerCase();
console.log(ogrenciBul(ogrIsim));
 */
//* ======================================================
//*                   FOR-OF LOOP
//* ======================================================

//* for of dongusu, for in dongusunun bir cok veri yapisini
//* kapsayacak sekilde guncellenmis halidir. Bu dongude dizi
//* icersindeki veriye erisirken indisleme kullanmaya gerek yoktur.

/* const ogrenciBulForOf = function (isim) {
  let sayac = 0;
  for (let ogrenci of ogrenciler) {
    if (ogrenci === isim) {
      sayac++;
    }
  }

  if (sayac === 0) {
    return `${isim} bulunamadı`;
  } else {
    return `${isim}, ${sayac} adet bulundu`;
  }
};

let ogrName = prompt("Öğrenci adını giriniz:").toLocaleLowerCase();
console.log(ogrenciBulForOf(ogrName)); */

const ogrenciBulForOf = function (isim) {
  let sayac = 0;
  for (let ogrenci of ogrenciler) {
    ogrenci === isim ? sayac++ : null; //! Ternary
    //   ogrenci === isim && sayac++;
    //! Short- circuit yöntemi: && => koşul doğru ise ifadeyi çalıştır
    //   ogrenci === isim || sayac--;
    //! Short- circuit yöntemi: || => koşul yanlış ise ifadeyi çalıştır
  }

  return !sayac ? `${isim} bulunamadı` : `${isim}, ${sayac} adet bulundu`;
  // return sayac ? `${isim}, ${sayac} adet bulundu` : `${isim} bulunamadi`;
};

// let ogrName = prompt("Öğrenci adını giriniz:").toLocaleLowerCase();
// console.log(ogrenciBulForOf(ogrName));
