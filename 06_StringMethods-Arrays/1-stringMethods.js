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
const s1 = "hello";
const s2 = "world";
const s3 = s1.concat(s2);
console.log(s3);

console.log(s3.concat(" Hi", str2, " Merhaba"));
console.log(s2, s3); //* concat() birlşetirme yapıyor ve orjinalini bozmuyor

//* ----------------------------------------------------------
//* charAt()
//* ----------------------------------------------------------
console.log(s3.charAt()); //! 0. indexte bulunan char'ı getirir.
console.log(s3.charAt(4)); //! o 4. indexte bulunan char'ı getir'
console.log(s3.charAt(s3.length - 1)); //! d sonuncu indexte bulunan char'ı getir'

//* ----------------------------------------------------------
//* includes() - case sensitive - true/false döndürür
//* ----------------------------------------------------------
const word = "To be or not to be, that is the question";
console.log(word.includes("to be")); //! true
console.log(word.includes("That")); //! false
console.log(word.includes("")); //! true *aslında null karakteri demek derleyiciler her kelime karakterinin bitimine null basıyorrlar
console.log(word.includes("to be", 13)); //! true * 13. indexten sonra to be var mı ona bakar
console.log(word.includes("to be", 14)); //! false 

//* ----------------------------------------------------------
//* indexOf() , lastIndexOf() - case sensitive
//* ----------------------------------------------------------
const tobeIndex = word.indexOf("or");
console.log(tobeIndex); //! 6 şu değere sahip olan indexi ver.
console.log(word.indexOf("be")); //! 3 ilk gördüğü indexi döndürür.
console.log(word.lastIndexOf("be")); //! 16 son indexten gelerek ilk gördüğü indexi döndürür.
console.log(word.lastIndexOf("BE")); //! eğer yoksa -1 döndürür ve -1 index aslında yok demektir.

//* ----------------------------------------------------------
//* startsWith() , endsWith() - case sensitive
//* ----------------------------------------------------------
const word2 = "Salına salına sinsice !";
console.log(word2.startsWith("sa")); //! false baştan bakıyor.
console.log(word2.startsWith("sa", 7)); //! true 7. değerden sonra bakıyor.
console.log(word2.endsWith("!")); //! true çünkü ünlem ile bitiyor.

//* ----------------------------------------------------------
//*  replace(searchFor, replaceWith) --immutable
//* ----------------------------------------------------------
// const oku = "Oku Baban gibi, saf olma";
// console.log(oku.replace("saf olma", "akıllı ol"));
// console.log(oku); //! orjinali bozulmamış. fakat let ile tanımlayıp yeniden atama yaparsak olur.

let oku = "Oku Baban gibi, saf olma";
console.log(oku);
oku = oku.replace("saf olma", "akilli ol")
console.log(oku); //! orjinali bozulmamış. fakat let ile tanımlayıp yeniden atama yaparsak olur.

//* Detaylı değiştirme alternatifleri için regex kullanılabilir.
console.log(oku.replace(/AKILLI/i,"Zeki"));


//* ----------------------------------------------------------
//*  slice(beginIndex[, endIndex])
//*  substring(beginIndex[, endIndex])
//*  substr (depreceated)
//* ----------------------------------------------------------
const veysel = "Uzun ince bir yoldayım yürüyorum gündüz gece..";
const sliced = veysel.slice(33); //! gündüz gece.. * 33.indexten sonrasını aldı
console.log(sliced, veysel); //! veysel orjinali bozulmuyor
console.log(typeof sliced); //! string
console.log(veysel.slice(17, 30)); //! dayım yürüyor
console.log(veysel.slice(-10)); //! düz gece *tersen -1 olarak sayıp -10 a gidip sonrasını alıyor
console.log(veysel.slice(-23, -19)); //! yürü
console.log(veysel.substring(-23, -19)); //! negatif index kullanmıyor slice() kullanmak daha kullanışlı
console.log(veysel.substring(17, 30)); //! dayım yürüyor *

//* ----------------------------------------------------------
//* split([sep [, limit] ])
//* ----------------------------------------------------------
const tarkan = "Gel gündüzle gece olalım";
console.log(tarkan);
const splited = tarkan.split(" "); //! Boşluklara göre ayırdı Array' çevirdi. ['Gel', 'gündüzle', 'gece', 'olalım']
console.log(splited);
console.log(typeof splited);

const gece = splited[2]; //! indisleme ile değer okunabilir.
console.log(gece);

const chars = tarkan.split("");
console.log(chars); //! null karakterine göre harfleri ayırarak bir char dizisi oluşturdu.

const copyTarkan = tarkan.split();
console.log(copyTarkan); //! stringi array haline getirdi

//* ÖDEV
//* ----------------------------------------------------------
// https://www.youtube.com/watch?v=b7vfp5G4brE
// https://youtu.be/b7vfp5G4brE

const uzunLink = 'https://www.youtube.com/watch?v=b7vfp5G4brE';
const link = "https://youtu.be/";
const kısaLink = link + uzunLink.slice(32);
console.log(kısaLink);
//* ----------------------------------------------------------
//* trim();
//* ----------------------------------------------------------

const ramazan = "     Hoş geldin ya şehri Ramazan     ";
console.log(ramazan, ramazan.length);
console.log(ramazan.trim(), ramazan.trim().length); //! baştaki ve sonraki boşlukları kaldırıyor.