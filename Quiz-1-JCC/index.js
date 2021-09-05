//Judul 1 : Function Penghasil Tanggal Hari Esok
//Buatlah sebuah function dengan nama next_date() yang menerima 3 parameter tanggal, bulan, tahun dan mengembalikan nilai tanggal hari esok dalam bentuk string, dengan contoh input dan otput sebagai berikut.
//contoh :
//var tanggal = 29
//var bulan = 2
//var tahun = 2020
//next_date(tanggal , bulan , tahun ) // output : 1 Maret 2020

//Jawaban Judul 1

var tanggal = 3
var bulan = 4
var tahun = 2021

function tanggalBesok(tanggal, bulan, tahun){
    var months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "Desember"];
    var SelectMonth = months[bulan-1];
    var fusion = SelectMonth + '/' + tanggal.toString() + '/' + tahun.toString();
    var s = new Date(fusion);
    s.setDate(s.getDate() +1);
    return `${s.getDate()} ${months[s.getMonth()]} ${(s.getFullYear())}`;
}

var hasilJudulDua = tanggalBesok(tanggal, bulan, tahun);

console.log(hasilJudulDua +  '\n');

//Judul 2 : Function Penghitung Jumlah Kata

//Buatlah sebuah function dengan nama jumlah_kata() yang menerima sebuah kalimat (string), dan mengembalikan nilai jumlah kata dalam kalimat tersebut.
//Contoh
//var kalimat_1 = " Halo nama saya Muhammad Iqbal Mubarok "
//var kalimat_2 = "Saya Iqbal"
//jumlah_kata(kalimat_1) // 6
//jumlah_kata(kalimat_2) // 2

//Jawaban Judul 2

function jumlahKata(string) {
    var pemisah = string.split(' ').filter((kata) => {if (kata !== ' ')
    return kata;
    })
     return pemisah.length;
}
    
var kalimat_1 = "Hallo nama saya Farah Kamila"
var kalimat_2 = "Saya Farah"
var hasil_1 = jumlahKata(kalimat_1)
var hasil_2 = jumlahKata(kalimat_2)
    
console.log(kalimat_1 + '= ' + hasil_1 + '\n')
console.log(kalimat_2 + '= ' + hasil_2 + '\n')