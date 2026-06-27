// Melakukan pengecekan jika suatu value jika dibalik akan sama hasilnya

// program menggunakan build in method
// O(n) -> linear time complexity
// O(n) -> linear auxiliary space
function isPalindrome(arr){
    return arr === arr.split("").reverse().join("")
}

console.log(isPalindrome("malam"))


// program dengan two pointer dan menggunakan algoritma pencarian linear search
// O(n) -> linear time complexity
// O(1) -> constant auxiliary space
function isTwoPointerPalindrome(str){
    let left = 0
    let right = (str.length-1)
    while(left < right){
        if(str[left] !== str[right]) return false
        left++
        right--
    }
    return true
}

console.log(isTwoPointerPalindrome("123454321"))