const mergeSort = require("./mergeSort");

test('mergeSort should sort an array in asc order', () => {
    expect(mergeSort([23, -98, 5, 0, -3], false)).toEqual([-98, -3, 0, 5, 23])
})

test('mergeSort should sort an array in desc order', () => {
    expect(mergeSort([23, -98, 5, 0, -3], true)).toEqual([23, 5, 0, -3, -98])
})
