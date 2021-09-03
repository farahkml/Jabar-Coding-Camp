//soal 1

var nilai = 60

if(nilai >=85) {
    console.log("A");
}   else if(nilai >=75 && nilai <85) {
    console.log("B");
}   else if(nilai >=65 && nilai <75) {
    console.log("C");
}   else if(nilai >=55 && nilai <65) {
    console.log("D");
}   else if(nilai <55) {
    console.log("E");
}

//soal 2

var tanggal = 30;
var bulan = 5;
var tahun = 1996;


switch(bulan) {
    case 1: var bulan="Januari"; break;
    case 2: var bulan="Februari"; break;  
    case 3: var bulan="Maret"; break;
    case 4: var bulan="April"; break;
    case 5: var bulan="Mei"; break;
    case 6: var bulan="Juni"; break;  
    case 7: var bulan="Juli"; break; 
    case 8: var bulan="Agustus"; break;
    case 9: var bulan="September"; break;
    case 10: var bulan="Oktober"; break;  
    case 11: var bulan="November"; break; 
    case 12: var bulan="Desember"; break;
}


var gabungan = tanggal + " " + bulan + " " + tahun

console.log(gabungan)

switch(bulan){
    case 5: {console.log("30 Mei 1996"); break;}
}


//soal 3

var n 
n = 7

for(var baris = 1; baris<= n; baris++){
    var pagar =""
    for(var kolom = 1; kolom<= baris; kolom++){
        pagar = pagar + "###"
    }

    console.log(pagar)
}







