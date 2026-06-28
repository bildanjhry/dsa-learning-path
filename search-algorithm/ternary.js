function findBook(rack, target){
    let low = 0
    let high = (rack.length-1)

    while(low <= high){
        let third = Math.floor((high - low)/3)
        let mid1 = low + third
        let mid2 = high - third

        if(rack[mid1] === target) return mid1
        if(rack[mid2] === target) return mid2

        if(target > rack[mid2]) low = mid2+1 // move to the third section if target is greater then second's end
        if(target < rack[mid1]) high = mid1-1 // move to the first section if target is smaller then first's end
        else { // move to second section
            low = mid1+1
            high = mid2-1
        }
    }
    return -1
}

console.log(findBook([2, 12, 14, 16, 17, 18, 20, 22], 16))


function findFloor(list, target){
    let low = 0
    let high = (list.length-1)

    while(low <= high){
        let third = Math.floor((high - low)/3)
        let mid1 = low + third
        let mid2 = high - third

        if(list[mid1] === target) return mid1
        if(list[mid2] === target) return mid2

        if(target > list[mid2]) low = mid2+1
        else if(target < list[mid1]) high = mid1-1
        else{
            low = mid1+1
            high = mid2-1
        }
    }
    return -1
}

console.log(findFloor([2, 4, 5, 10, 12, 14, 15, 22], 2))

