// ? ==========================================================
// ?                    FONKSİYONLAR
// ? ==========================================================

// !-----------------------------------------------------------
// ! 1.YÖNTEM  : FUNCTION DECLARATION
// !-----------------------------------------------------------


console.log("****** FUNC DECLARATION *********");


//* Örnek1:
//****************************************************************/
// yazdir(); //!invoke


//! Declaration
//! Paramatre almamış, bir şey döndürmek (void function)
/* function yazdir() {
  console.log("Merhaba");
}

yazdir(); //!invoke(Çağırmak)
yazdir(); //!invoke


console.log(typeof yazdir) //* function */

//* Örnek2: Parametreli Fonksiyon
//***************************************************************/

/* function selamla(name, lastName = "") {
  console.log(`Merhaba ${name} ${lastName}`)
}

selamla("Onur", "Kordoğan")
selamla("Kevser", "kordoğan")
selamla("KORDOĞAN") */

//! Bir parametreyi çağırma sırasında kullanmaz isek onun yerine default paramtere atayabiliriz. Örnekte ki lastName parametresinin default değerine '' atanmıştır.

//* Örnek3: Parametreli, Dönüş değerli
//***************************************************************/
/* function yasHesapla(year, name){
  // const mesaj = `${name}'nın yaşı ${2022 - year} dir.`
  const mesaj = `${name}'nın yaşı ${new Date().getFullYear() - year} dir.`
  return mesaj;
};


mesaj1 = yasHesapla(2000, "İlayda");
console.log(mesaj1); */


//* Örnek4: Parametreli, Dönüş değerli
//**********************************************************/

// function tekCift (number){
//  return number % 2 === 0 ? `${number} çifttir.` : `${number} tektir.`
// };

// console.log(tekCift(5));
// console.log(tekCift(2));
