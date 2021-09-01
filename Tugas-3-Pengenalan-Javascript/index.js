// soal 1
var pertama = "saya sangat senang hari ini";
var kedua = "belajar javascript itu keren";

// jawaban soal 1


var kataPertama = pertama.substring(0,4) + " "; 
var kataKedua = pertama.substring(12,18) + " ";
var kataKetiga = kedua.substring(0,7) + " ";
var kataKeempat = kedua.substring(8,18) + " "; 
var upper = kataKeempat.toUpperCase(); 

console.log(kataPertama+kataKedua+kataKetiga+upper);

 



// soal 2
var kataPertama = "10";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "6";

// jawaban soal 2
var intPertama = parseInt(kataPertama);
var intKedua = parseInt(kataKedua);
var intKetiga = parseInt(kataKetiga);
var intKeempat = parseInt(kataKeempat);

var hasil = intPertama + (intKedua * intKetiga) + intKeempat

console.log(hasil)


// soal 3
var kalimat = 'wah javascript itu keren sekali'; 

// jawaban soal 3

var kataPertama = kalimat.substring(0,3); 
var kataKedua = kalimat.substring(4,14);
var kataKetiga = kalimat.substring(15,18);
var kataKeempat = kalimat.substring(19,24); 
var kataKelima = kalimat.substring(25,31); 

console.log(kataPertama); 
console.log(kataKedua); 
console.log(kataKetiga); 
console.log(kataKeempat); 
console.log(kataKelima);

