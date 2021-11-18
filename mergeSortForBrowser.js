const _mergeArraysAsc = (a, b) => {
    const c = []
    while (a.length && b.length) {
        c.push(a[0] > b[0] ? b.shift() : a.shift())
    }
    while (a.length) {
        c.push(a.shift())
        numOfSwaps++
    }
    while (b.length) {
        c.push(b.shift())
        numOfSwaps++
    }
    return c
}

const _mergeArraysDesc = (a, b) => {
    const c = []
    while (a.length && b.length) {
        c.push(a[0] < b[0] ? b.shift() : a.shift())
    }
    while (a.length) {
        c.push(a.shift())
        numOfSwaps++
    }
    while (b.length) {
        c.push(b.shift())
        numOfSwaps++
    }
    return c
}

const mergeSort = (arr, desc=false) => {
    if (arr.length < 2) return arr
    const middle = Math.floor(arr.length / 2)
    const arr_l = arr.slice(0, middle)
    const arr_r = arr.slice(middle, arr.length)
    const sorted_l = mergeSort(arr_l, desc)
    const sorted_r = mergeSort(arr_r, desc)
    if (desc===false) return _mergeArraysAsc(sorted_l, sorted_r)
    else {return _mergeArraysDesc(sorted_l, sorted_r)}
}

let numOfComparisons = 0
let numOfSwaps = 0

console.log("Merge sort:")
console.log(...mergeSort([23, -98, 5, 0, -3], true))
console.log(`Number of comparisons: ${numOfComparisons}`)
console.log(`Number of swaps: ${numOfSwaps}`)
