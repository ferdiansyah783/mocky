// Contoh data yang disimpan dalam array

var data_siswa=['rini','eka','yuni','parjo'];

var result="";

for(i=0;i<data_siswa.length;i++)
{
   template="siswa "+data_siswa[i]+" adalah murid dari sekolah kami\n";
   result+=template; 
}

console.log(result);

/* Contoh data yang disimpan dalam object
    Q:Kenapa pakai object ?
    A:Karena array di javascript hanya bisa single dimensi,bisa multidimensi tapi developer jarang memakai
*/

var data_guru={
    munir:{
        nama:"Munir Sanjaya",
        usia:27
    },
    harto:{
        nama:"Suharto",
        usia:34
    },
    santi:{
        nama:"Susanti Wijaya",
        usia:45
    }   
}

var key_guru=Object.keys(data_guru);

var ucapan="";
for(i=0;i<key_guru.length;i++)
{
    template = `Pak ` + data_guru[key_guru[i]].nama + ` adalah salah satu guru kami,beliau berusia ` + data_guru[key_guru[i]].usia+` tahun\n`;
    ucapan+=template;
}

console.log(ucapan);