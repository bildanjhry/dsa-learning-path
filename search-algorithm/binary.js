// Binary Search

// jika kita ingin mencari angka dan menggunakan linear search
// lalu menggunakan konsep 2 pointer sehingga secara time complexity = O(n) dan auxiliary space = O(1)
// namun jika n = 10000000 maka fungsi ini menjadi f(n) = 5000000n + 3
function findIndex(arr, target){
    let left = 0
    let right = arr.length-1
    while(left <= right){
        if(arr[left] === target) return left
        else if(arr[right] === target) return right
        left++
        right--
    }
    return -1
}

console.log(findIndex([12, 22, 8, 10, 7, 5], 10))

// menggunakan perulangan 1 arah
function findIndexOneLine(arr, target){
    let i = 0
    while(i <= arr.length-1){
        if(arr[i] === target) return i
        i++
    }
    return -1
}

// dengan menggunakan recursive function konsep 2 pointer
function findIndexRec(arr, target, curr){
    if(curr === 0) return -1
    let left = 0
    if(arr[left] === target) return left
    else if(arr[curr] === target) return curr
    left++
    findIndexRec(arr, target, curr-1)
}

const arr = [12, 11, 8, 10, 7, 2]
console.log(findIndex(arr, 2, arr.length-1))

// namun jika menggunakan binary search dan Binary search baru bisa digunakan secara efektif jika kita 
// mempunyai array yang berurut.
// O(log2 n) time complexity
function findIndexBin(arr, target){
    let left = 0
    let right = arr.length-1

    while(left <= right){
        let mid = Math.floor((left + right)/2)
        if(arr[mid] === target) return mid
        else if(arr[mid] < target){left = mid+1}
        else{right = mid-1}
    }
    return -1
}

console.log(findIndex([2, 8, 9, 10, 12, 14, 16], 12))