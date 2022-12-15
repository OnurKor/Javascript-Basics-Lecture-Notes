// ?======================================================
// ?                     STRING METOTLARI
// ! KAYNAK: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// ?======================================================

console.log('******* STRING METHODS ********');

//! Klasik yöntem ile string tanımlanırsa bu string bir primitive değişkendir.
const str1 = "Onur";
const str2 = "Kordoğan";
const str3 = "Frontend";

console.log(typeof str1);
const str4 = str1 + str2; //*String concat
console.log(str4);

console.log(str4.concat(str3)); 

//! Non-primitive String tanımlama

const str5 = new String("Non-primitive String");
console.log(str5, typeof str5);

//* Normalde primitive veri tiplerinin property veya metodu olmaz.
//* Ancak,Javascript otomatik olarak primitive String'ler için object wrapper oluşturur.
//* Bu sayede, String nesnelerine ait olan fonksiyonlar veya özellikleri
//* primitive string ile kullanılabilir hale gelir.
//* Sonrasında oluşan bu object bellekten otomatik olarak kaldırılır.

//? Ek Açıklama için : https://javascript.info/primitives-methods

//* ----------------------------------------------------------
//*  concat() - immutable
//* ----------------------------------------------------------




//* ----------------------------------------------------------
//* charAt()
//* ----------------------------------------------------------


//* ----------------------------------------------------------
//* includes() - case sentive
//* ----------------------------------------------------------


//* ----------------------------------------------------------
//* indexOf() , lastIndexOf() - case sensitive
//* ----------------------------------------------------------


//* ----------------------------------------------------------
//* startsWidth() , endsWith() - case sensitive
//* ----------------------------------------------------------


//* ----------------------------------------------------------
//*  replace(searchFor, replaceWith) --immutable
//* ----------------------------------------------------------


//* Detaylı değiştirme alternatifleri için regex kullanılabilir.


//* ----------------------------------------------------------
//*  slice(beginIndex[, endIndex])
//*  substring(beginIndex[, endIndex])
//*  substr (depreceated)
//* ----------------------------------------------------------


//* ----------------------------------------------------------
//* split([sep [, limit] ])
//* ----------------------------------------------------------


//* ÖDEV
//* ----------------------------------------------------------
// https://www.youtube.com/watch?v=b7vfp5G4brE
// https://youtu.be/b7vfp5G4brE

//* ----------------------------------------------------------
//* trim();
//* ----------------------------------------------------------