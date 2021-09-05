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

