/*
O(log n)
Algoritma ini membelah data menjadi dua setiap kali 
melakukan pengecekan.
Contoh klasiknya adalah Binary Search. Syarat utamanya: data harus sudah terurut.
*/


// finding index of target in the array
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
		console.log(mid)

        if (arr[mid] === target) return mid; // Ketemu!
        if (arr[mid] < target) left = mid + 1; // Cari di kanan
        else right = mid - 1; // Cari di kiri
    }
    return -1;
}

const angkaUrut = [1, 3, 5, 7, 9, 11, 13, 15];
console.log(binarySearch(angkaUrut, 11)); // Output: 5 (indeks ke-5)