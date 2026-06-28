 /*First occurrence search algorithm
 cara mencari kapan suatu value muncul untuk pertama kali.
 program ini menggunakan pendekatan binary search O(log n) dan O(1) auxiliary space   
 maka untuk menerapkan alogritma ini data harus terurut terlebih dahulu. */

function findFirstBinary(list, target){
    let low = 0, high = list.length-1, point = -1
    while(low <= high){
        let mid = Math.floor((low+high)/2)
        if(list[mid] === target){
            point = mid // takes the index of found data
            high = mid-1 // but conquer the second's end and move pointer to first's end to continue searching
        }
        else if(target < list[mid]) high = mid-1
        else low = mid+1
    }
    return point
}


const nums = [1, 2, 2, 2, 3, 3, 4, 4, 5];
console.log(findFirstBinary(nums, 3));