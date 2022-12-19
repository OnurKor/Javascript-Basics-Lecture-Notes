//* ===================================================
//*                 (OBJECTS)
//* ===================================================

//? Diziler sıralı bellek bölgeleridir. Dolayısıyla bu
//? bölgelere indeksleme ile erişebiliriz.
//? Ancak daha karmaşık veri yapısı (unstructured)ihtiyaçalrımız
//? için Object'leri kullanabiliriz.

//? Object'lerde Key-value (property-value) yapısı kullanılır.
//? Herhangi bir veriyi erişmemk için property (key) adı kullanılır.

console.log('******* Objects *********');

//! 3 farklı yöntem ile Object oluşturulabilir
//* ---------------------------------------------------------
//* 1- Object() class'ından new Operatörü ile
//* ---------------------------------------------------------



//! Read


//* ---------------------------------------------------------
//* 2- object constructor'ı kullanarak (OOP ile ayrıntılandırılacak)
//* ---------------------------------------------------------

//* Object constructor


//* ---------------------------------------------------------
//* 3- Object literal (En çok tercih edilen yöntem)
//* ---------------------------------------------------------



//* ======================================================
//*              Object Metotları
//* ======================================================





//! NOT: arrow fonksiyonları farklı amaç için geliştirilmiş fonksiyonlarıdır
//! ve lexical context'e sahiptirler. Dolayısıyla, bir arrow fonk. içerisinde
//! this kelimesi kullanılrsak beklenmeyen sonuclar alabiliriz.
//! Çünkü, arrow içerisindeki this kelimesi global scope'u gösterir. (window nesnesini) gösterir.
//! Bunu engellemek için object fonskyionlarını tanımlamak için normal fonksiyon yöntemlerini kullanmak gerekir.

// * ======================================================
// *                  OBJECT ITERATION
// * ======================================================

//? Nested objects




//? JSON => javascript Object Notation

//?{name: 'Ruzgar', surname: 'Kuzey', job: 'tester', age: 24}

//* Ornek1: kisiler dizisindeki job'lari tek tek yazdiriniz.


//* Ornek2: yaslari bir artirarak yeni bir diziye saklayiniz.


//* Ornek3: name ve surname'leri birlestirip buyuk harfe ceviren ve
//* bunu name key'i olarak saklayan, aynı zamanda age degerlerini 5
//* arttırarak age key'ine saklayan ve oluşan diziyi döndüren kodu yazınız.


//? Alternatif syntax


//* Ornek4: Yasi(age) 33 den kücük olan kisilerin adlarini (name) listeyiniz.

//* Ornek5: 33 yasindan kücüklerin isimlerini diziye saklayiniz.

//* Ornek6: Meslegi developer olanlarin isim ve yaslarini yeni bir Obje olarak
//* yeni diziye saklayiniz.

//* Ornek7: kisilerin ortalama yasini hesaplayiniz.

