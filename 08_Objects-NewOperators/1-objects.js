//* ===================================================
//*                 (OBJECTS)
//* ===================================================

//? Diziler sıralı bellek bölgeleridir. Dolayısıyla bu
//? bölgelere indeksleme ile erişebiliriz.
//? Ancak daha karmaşık veri yapısı (unstructured)ihtiyaçalrımız
//? için Object'leri kullanabiliriz.

//? Object'lerde Key-value (property-value) yapısı kullanılır.
//? Herhangi bir veriyi erişmemk için property (key) adı kullanılır.

console.log("******* Objects *********");

//! 3 farklı yöntem ile Object oluşturulabilir
//* ---------------------------------------------------------
//* 1- Object() class'ından new Operatörü ile
//* ---------------------------------------------------------

const araclar = new Object();
araclar.marka = "BMW";
araclar.motor = 1.3;
araclar.model = 2022;

//! Read
console.log(araclar);
console.log(araclar.motor); //? . notasyon => 1.3
console.log(araclar["model"]); //? square bracket notasyonu => 2022

//* ---------------------------------------------------------
//* 2- object constructor'ı kullanarak (OOP ile ayrıntılandırılacak)
//* ---------------------------------------------------------

//* Object constructor
function Personel(id, ad, maas) {
  this.perId = id;
  this.perAdi = ad;
  this.perMaas = maas;
  console.log(this); //! Personel objesine bağlanmıştır (binded)
}

const ahmet = new Personel(101, "Ahmet", 75000);
const canan = new Personel(102, "Canan", 85000);
console.log(ahmet, canan);
console.log(canan.perMaas);
console.log(ahmet.perAdi);

console.log(this); //! window objesine bağlanmıştır çünkü global scope'ta this yapılmıştır.

//* ---------------------------------------------------------
//* 3- Object literal (En çok tercih edilen yöntem)
//* ---------------------------------------------------------

const calisan = {
  ad: "Ahmet",
  soyad: "Yilmaz",
  yas: 30,
  is: "devepoler",
  diller: ["C", "C++", "Python", "JS"],
  maas: 120000,
};

console.log(calisan);
console.log(calisan.yas);
console.log(calisan.diller);
console.log(calisan.diller[3]);
console.log(calisan[1]); //! undefined döndürür çünkü object elemanlarına indisleme ile erişemeyiz.

calisan.konum = "Turkey";
calisan.email = "ahmet@gmail.com";
calisan["dogum"] = 1990;
console.log(calisan); //! heapte bulunan yerine yeni bir property ekledik.

const isci = calisan; //! referans aktarımı(yani adres aktarımı) ikisi de aynı bellek adresini gösteriyor. sığ kopyalama denir.
isci.maas = 50000;
console.log(isci, calisan); //! ikisi birden değişti yani. mantıklı bir kopyalama yöntemi değil.

//* ======================================================
//*              Object Metotları
//* ======================================================

const kisi = {
  ad: "Can",
  soyad: "Canan",
  dogum: 1990,
  meslek: "developer",
  ehliyet: true,
  yasHesapla: function () {
    return new Date().getFullYear() - this.dogum;
  },
  ozet: function () {
    return `${this.ad}, ${this.yasHesapla()} yaşındadır.`;
  },
  /*  ozet: () => {
        console.log(this);
        return `${this.ad}, ${this.yasHesapla()} yaşındadır.`;
    }, */
};

console.log("Yas: ", kisi.yasHesapla());
console.log("Bilgi:", kisi.ozet());

//! NOT: arrow fonksiyonları farklı amaç için geliştirilmiş fonksiyonlarıdır
//! ve lexical context'e sahiptirler. Dolayısıyla, bir arrow fonk. içerisinde
//! this kelimesi kullanılrsak beklenmeyen sonuclar alabiliriz.
//! Çünkü, arrow içerisindeki this kelimesi global scope'u gösterir. (window nesnesini) gösterir.
//! Bunu engellemek için object fonskyionlarını tanımlamak için normal fonksiyon yöntemlerini kullanmak gerekir.

// * ======================================================
// *                  OBJECT ITERATION
// * ======================================================

//? Nested objects
const kisilerObject = {
  ahmet: {
    ad: "Ahmet",
    soyad: "Yilmaz",
    yas: 30,
    is: "devepoler",
    diller: ["C", "C++", "Python", "JS"],
    maas: 120000,
  },
  mehmet: {
    ad: "Mehmet",
    soyad: "Yilmaz",
    yas: 24,
    is: "devepoler",
    diller: ["C", "C++", "Python", "JS"],
    maas: 200000,
  },
};
console.log(kisilerObject);

console.log(kisilerObject.ahmet);
console.log(kisilerObject.ahmet.is);

//? JSON => javascript Object Notation
const kisiler = [
  {
    name: "Ahmet",
    surname: "Can",
    job: "developer",
    age: 30,
  },
  {
    name: "Mehmet",
    surname: "Baki",
    job: "tester",
    age: 35,
  },
  {
    name: "Nur",
    surname: "Ersan",
    job: "team lead",
    age: 40,
  },
  {
    name: "Merve",
    surname: "Veli",
    job: "developer",
    age: 26,
  },

  {
    name: "Ruzgar",
    surname: "Kuzey",
    job: "tester",
    age: 24,
  },
];
console.log(kisiler);
console.log(kisiler[4]); //?{name: 'Ruzgar', surname: 'Kuzey', job: 'tester', age: 24}

//* Ornek1: kisiler dizisindeki job'lari tek tek yazdiriniz.
kisiler.forEach((kisi) => console.log(kisi.job));

//* Ornek2: yaslari bir artirarak yeni bir diziye saklayiniz.
const yaslar = kisiler.map((kisi) => kisi.age + 1);
console.log(yaslar);

//* Ornek3: name ve surname'leri birlestirip buyuk harfe ceviren ve
//* bunu name key'i olarak saklayan, aynı zamanda age degerlerini 5
//* arttırarak age key'ine saklayan ve oluşan diziyi döndüren kodu yazınız.

const kisilerFullIsim = kisiler.map((kisi) => ({
  fullname: kisi.name.toUpperCase() + " " + kisi.surname.toUpperCase(),
  age: kisi.age + 5,
}));

//? Alternatif syntax

const kisilerFullIsim2 = kisiler.map((kisi) => {
  return {
    fullname: kisi.name.toUpperCase() + " " + kisi.surname.toUpperCase(),
    age: kisi.age + 5,
  };
});

console.log(kisilerFullIsim);
console.log(kisilerFullIsim2); //? Alternatif syntax

//* Ornek4: Yasi(age) 33 den kücük olan kisilerin adlarini (name) listeyiniz.

//* Ornek5: 33 yasindan kücüklerin isimlerini diziye saklayiniz.

//* Ornek6: Meslegi developer olanlarin isim ve yaslarini yeni bir Obje olarak
//* yeni diziye saklayiniz.

//* Ornek7: kisilerin ortalama yasini hesaplayiniz.

const ortYas = kisiler.reduce((top, kisi) => top + kisi.age, 0) / kisiler.length; 
//! top'a başlangıç değeri(0) vermezsek yanlış cevap alıyoruz.
console.log("ORT YAS:", ortYas);
