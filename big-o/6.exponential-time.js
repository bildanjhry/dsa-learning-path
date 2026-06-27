/*
O(2^n)
Setiap kali input bertambah 1, jumlah eksekusinya berlipat ganda dari sebelumnya. 
Contohnya mencari bilangan Fibonacci dengan cara rekursif biasa (tanpa optimasi).
*/

function fibonacciRecursive(n) {
    if (n < 1) return n;
    console.log(n)

    // Memanggil dirinya sendiri 2 kali di setiap langkah
    fibonacciRecursive(n - 1)
}

console.log(fibonacciRecursive(10)); // Output: 8 (Tapi di balik layar, fungsi dipanggil puluhan kali)
