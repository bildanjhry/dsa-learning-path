// Menjumlahkan deret angka natural

// jika menggunakan recursive function
function sum(n){
    if(n === 1) return 1
    return n + sum(n-1)
}
console.log(sum(10))

// menggunakan rumus gaus
function findSum(n){
    return n * (n + 1) / 2;
}

console.log(findSum(10));

// berdasarkan sebuah array
function findSumOfArr(arr){
    return arr.length * (arr.length+1) /2
}

console.log(findSumOfArr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))