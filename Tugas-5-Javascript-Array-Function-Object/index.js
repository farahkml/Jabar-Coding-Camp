// soal 1
var daftarHewan = ["2. Komodo", "5. Buaya", "3. Cicak", "4. Ular", "1. Tokek"];

for (var i = 1; i < daftarHewan.length; i++){
    for (var j = 0; j < i; j++){
        if (daftarHewan[i] < daftarHewan[j]) {
          
        var x = daftarHewan[i];
        daftarHewan[i] = daftarHewan[j];
        daftarHewan[j] = x;
        }
    }
}

for (var e = 0; e < daftarHewan.length; e++) console.log(daftarHewan[e]);


// soal 2
var data = { name : "Farah" , age : 25 , address : "Majalengka" , hobby : "Memasak" }

// jawaban 2

function introduction(data){
var nama = data.name 
var umur = data.age
var alamat = data.address
var hobi = data.hobby
return "Nama saya " + nama + ", " + "umur saya " + umur + " tahun, " + "alamat saya di " + alamat + ", " + "dan saya punya hobby yaitu " + hobi
}
var perkenalan = introduction(data)
console.log(perkenalan)


// soal 3
function hitung_huruf_vokal(str) {
    var count = str.match(/[aiueo]/gi).length;
    return count;
}

// jawaban 3

var hitung1 = hitung_huruf_vokal('Muhammad');
var hitung2 = hitung_huruf_vokal('iqbal');
console.log(hitung1, hitung2);


// soal 4
function hitung(angka) {
    return angka * 2 - 2;
}

// jawaban 4

console.log( hitung(0) )
console.log( hitung(1) )
console.log( hitung(2) )
console.log( hitung(3) )
console.log( hitung(5) )