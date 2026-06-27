/*
O(n log n)
Ini biasanya terjadi pada algoritma sorting yang efisien seperti Merge Sort. Ia membelah array secara logaritmik ($O(\log n)$) 
lalu menggabungkannya kembali sambil mengurutkan elemennya (O(n)).

*/

function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

function merge(left, right) {
    let result = [], i = 0, j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) result.push(left[i++]);
        else result.push(right[j++]);
    }
    return result.concat(left.slice(i)).concat(right.slice(j));
}

console.log(mergeSort([5, 2, 9, 1, 7])); // Output: [1, 2, 5, 7, 9]