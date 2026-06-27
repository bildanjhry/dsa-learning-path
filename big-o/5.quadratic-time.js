/*
O(n^2)
Ditandai dengan adanya nested loop (loop di dalam loop). Jika data berukuran 10, 
total operasi di dalamnya menjadi $10 \times 10 = 100$ kali.
*/

function quadraticTimeExample(arr) {
    for (let i = 0; i < arr.length; i++) { // Loop pertama
        for (let j = 0; j < arr.length; j++) { // Loop kedua
            console.log(`Pasangan: ${arr[i]} dan ${arr[j]}`);
        }
    }
}

quadraticTimeExample(['A', 'B', 'C']); // Berjalan 3 x 3 = 9 kali