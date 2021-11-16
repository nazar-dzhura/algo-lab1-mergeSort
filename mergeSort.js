const {performance} = require('perf_hooks');

const _mergeArrays = (a, b, desc) => {
    const c = []
    if (desc===false) {
        while (a.length && b.length) {
            c.push(a[0] > b[0] ? b.shift() : a.shift())
            numOfComparisons++
        }
    } else {
        while (a.length && b.length) {
            c.push(a[0] < b[0] ? b.shift() : a.shift())
            numOfComparisons++
        }
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

const mergeSort = (arr, desc) => {
    if (arr.length < 2) return arr
    const middle = Math.floor(arr.length / 2)
    const arr_l = arr.slice(0, middle)
    const arr_r = arr.slice(middle, arr.length)
    const sorted_l = mergeSort(arr_l, desc)
    const sorted_r = mergeSort(arr_r, desc)
    return _mergeArrays(sorted_l, sorted_r, desc)
}

let numOfComparisons = 0
let numOfSwaps = 0

console.log("Merge sort:")
const t0 = performance.now();
console.log(...mergeSort([23, -98, 5, 0, -3], true))
const t1 = performance.now();
console.log(`Sorting took ${t1 - t0} milliseconds.`)
console.log(`Number of comparisons: ${numOfComparisons}`)
console.log(`Number of swaps: ${numOfSwaps}`)

module.exports = mergeSort