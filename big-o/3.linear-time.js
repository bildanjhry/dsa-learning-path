/*
O(n)
Waktu pengerjaan akan bertambah seiring bertambahnya jumlah n. Jika array berisi 10 data, 
looping berjalan 10 kali. Jika 1 juta data, berjalan 1 juta kali.
*/

function linearTimeExample(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(`Memeriksa data ke-${i}: ${arr[i]}`);
    }
}

linearTimeExample([10, 20, 30]);